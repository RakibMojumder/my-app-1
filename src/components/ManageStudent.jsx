import React, { useEffect, useState } from "react";
import { collection, getDocs } from "@firebase/firestore";
import { db } from "../firebase/firebase.config";
import { FiEye, FiEdit3 } from "react-icons/fi";
import { HiOutlineTrash } from "react-icons/hi";
import { Link } from "react-router-dom";
import DeleteModal from "./DeleteModal";
import { format } from "date-fns";

const ManageStudent = () => {
  const [students, setStudents] = useState([]);
  const [student, setStudent] = useState({});
  const studentCollections = collection(db, "students");
  const [isOpen, setIsOpen] = useState(false);

  const getStudents = async () => {
    const data = await getDocs(studentCollections);
    console.log(data);
    setStudents(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getStudents();
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-base md:text-3xl text-slate-800 font-bold uppercase my-4">
          Manage Student
        </h1>
        <p className="text-slate-800 font-semibold text-xs">
          {format(new Date(), "P")}
        </p>
      </div>
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
          <thead className="bg-[#FF2108]">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-white">
                Name
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-white">
                Class
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-white">
                Role No.
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-white">
                View / Edit / Delete
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {students.map((student) => (
              <tr key={student.id}>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  {student.firstName} {student.middleName} {student.lastName}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 font-semibold">
                  {student.class}-{student.division}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 font-semibold">
                  {student.roll}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-[#F33823] font-semibold flex items-center">
                  <Link to="/view" state={{ data: student }}>
                    <FiEye className="text-xl" />
                  </Link>
                  <Link to="/edit" state={{ data: student }}>
                    <FiEdit3 className="mx-6 text-xl" />
                  </Link>
                  <HiOutlineTrash
                    onClick={() => {
                      setIsOpen(true);
                      setStudent(student);
                    }}
                    className="text-xl"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isOpen && <DeleteModal setIsOpen={setIsOpen} student={student} />}
    </div>
  );
};

export default ManageStudent;
