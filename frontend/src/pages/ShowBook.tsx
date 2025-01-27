import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { Spinner, BackBtn } from "../components";

type Books = {
  _id?: string;
  title?: string;
  author?: string;
  publishYear?: string;
  createdAt: string;
  updateAt: string;
};

export default function ShowBook() {
  const [book, setBook] = useState<Books>({ createdAt: "", updateAt: "" });
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(`http://localhost:6980/books/${id}`);
        const data: Books = await res.data;

        setBook(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    setLoading(true);
    getData();
  }, [id]);

  return (
    <div className="p-4">
      <BackBtn />
      <h1 className="text-3xl my-4">Show Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4 ">
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Id</span>
            <span>{book?._id}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Title</span>
            <span>{book?.title}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Author</span>
            <span>{book?.author}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Publish Year</span>
            <span>{book?.publishYear}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Create Time</span>
            <span>{new Date(book?.createdAt).toString()}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Last Update Time</span>
            <span>{new Date(book?.updateAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  );
}
