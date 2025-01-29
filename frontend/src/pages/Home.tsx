import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";
import axios from "axios";

import { Spinner, BooksTable, BooksCard } from "../components";

type Books = {
  _id: string;
  title: string;
  author: string;
  publishYear: string;
};

export default function Home() {
  const [books, setBooks] = useState<Books[] | []>([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("http://localhost:6980/books");
        const data: Books[] = await res.data.data;

        setBooks(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    setLoading(true);
    getData();
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-center items-center gap-x-4 ">
        <button
          className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
          onClick={() => setShowType("table")}
        >
          Table
        </button>

        <button
          className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
          onClick={() => setShowType("card")}
        >
          Card
        </button>
      </div>

      <div className="flex flex-col justify-between items-center">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl my-8">Books List</h1>
          <Link to="/books/create">
            <MdOutlineAddBox className="text-sky-800 text-4xl" />
          </Link>
        </div>
        {loading ? (
          <Spinner />
        ) : showType === "table" ? (
          <BooksTable data={books} />
        ) : (
          <BooksCard data={books} />
        )}
      </div>
    </div>
  );
}
