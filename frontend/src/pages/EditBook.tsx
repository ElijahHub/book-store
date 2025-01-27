import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";
import axios from "axios";

import { Spinner, BackBtn } from "../components";

type Data = {
  title: string;
  author: string;
  publishYear: string;
};

type Books = {
  title: string;
  author: string;
  publishYear: string;
};

export default function EditBook() {
  const data = {
    title: "",
    author: "",
    publishYear: "",
    loading: false,
  };

  const [state, setState] = useState(data);
  const { title, author, publishYear, loading } = state;

  const { enqueueSnackbar } = useSnackbar();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(`http://localhost:6980/books/${id}`);
        const data: Books = await res.data;

        setState({
          ...state,
          title: data.title,
          author: data.author,
          publishYear: data.publishYear,
          loading: false,
        });
      } catch (error) {
        setState({ ...state, loading: false });
        alert("An error happened. Please Check Console");
        console.log(error);
      }
    };

    setState({ ...state, loading: true });
    getData();
  }, [id]);

  const putData = async (data: Data) => {
    try {
      await axios.put(`http://localhost:6980/books/${id}`, data);
      setState({ ...state, loading: false });
      enqueueSnackbar("Book Updated Successfully", { variant: "success" });
      navigate("/");
    } catch (error) {
      setState({ ...state, loading: false });
      enqueueSnackbar("An Error Occur", { variant: "error" });
      console.log(error);
    }
  };

  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };

    setState({ ...state, loading: true });
    putData(data);
  };

  return (
    <div className="p-4">
      <BackBtn />
      <h1 className="text-3xl my-4 ">Edit Book</h1>
      {loading ? <Spinner /> : ""}

      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label htmlFor="title" className="text-xl mr-4 text-gray-500">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setState({ ...state, title: e.target.value })}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label htmlFor="author" className="text-xl mr-4 text-gray-500">
            Author
          </label>
          <input
            type="text"
            name="author"
            value={author}
            onChange={(e) => setState({ ...state, author: e.target.value })}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label htmlFor="publishYear" className="text-xl mr-4 text-gray-500">
            Publish Year
          </label>
          <input
            type="text"
            name="publishYear"
            value={publishYear}
            onChange={(e) =>
              setState({ ...state, publishYear: e.target.value })
            }
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <button className="p-2 bg-sky-300 m-8 " onClick={handleEditBook}>
          Save
        </button>
      </div>
    </div>
  );
}
