import React from "react";
import { doc, deleteDoc } from "@firebase/firestore";
import { db } from "../firebase/firebase.config";
import { toast } from "react-hot-toast";

const DeleteModal = ({ setIsOpen, student }) => {
  const handleDeleteStudent = async () => {
    const studentDoc = doc(db, "students", student.id);
    await deleteDoc(studentDoc);
    setIsOpen(false);
    toast.success("successfully deleted");
  };

  return (
    <div className="bg-white flex justify-center items-center shadow-xl border absolute h-32 w-72 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div>
        <p className="text-center mb-4">Are you sure want to delete this?</p>
        <button
          onClick={() => setIsOpen(false)}
          className="px-7 py-1 bg-green-400 text-white"
        >
          Cancel
        </button>
        <button
          onClick={handleDeleteStudent}
          className="px-7 py-1 bg-red-500 text-white ml-6"
        >
          Yes
        </button>
      </div>
    </div>
  );
};

export default DeleteModal;
