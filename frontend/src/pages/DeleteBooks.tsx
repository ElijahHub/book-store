import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";
import axios from "axios";

import { BackBtn, Spinner } from "../components";

export default function DeleteBooks() {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteBook = async () => {
    setLoading(true);
    try {
      await axios.delete(`http://localhost:6980/books/${id}`);
      setLoading(false);
      enqueueSnackbar("Book Deleted Successfully", { variant: "success" });
      navigate("/");
    } catch (error) {
      setLoading(false);
      enqueueSnackbar("An Error Occur", { variant: "error" });
      console.log(error);
    }
  };

  return (
    <div className="p-4">
      <BackBtn />
      <h1 className="text-3xl my-4 ">Delete Book</h1>
      {loading ? <Spinner /> : ""}

      <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto ">
        <h3 className="text-2xl">
          {" "}
          Are Ypu Sure You Want to delete this book?
        </h3>

        <button
          className="p-4 bg-red-600 text-white m-8 w-full"
          onClick={handleDeleteBook}
        >
          Yes, Delete it
        </button>
      </div>
    </div>
  );
}
