import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";

type Books = {
  _id: string;
  title: string;
  author: string;
  publishYear: string;
};

type ModelProps = {
  data: Books;
  onClose(): void;
};

export default function BookModal({ data, onClose }: ModelProps) {
  return (
    <div
      className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center "
      onClick={onClose}
    >
      <div
        className="w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative "
        onClick={(e) => e.stopPropagation()}
      >
        <AiOutlineClose
          className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer"
          onClick={onClose}
        />

        <h2 className="w-fit px-4 py-1 bg-red-300 rounded=lg ">
          {data.publishYear}
        </h2>
        <h4 className="my-2 text-gray-500">{data._id}</h4>
        <div className="flex justify-start items-center gap-x-2">
          <PiBookOpenTextLight className="test-red-300 text-2xl" />
          <h2 className="my-1">{data.title}</h2>
        </div>

        <div className="flex justify-start items-center gap-x-2">
          <BiUserCircle className="text-red-300 text-2xl" />
          <h2 className="my-1"> {data.author} </h2>
        </div>

        <p className="mt-4">Anything you want to show</p>
        <div className="my-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque tempore
          consectetur distinctio excepturi, aliquid fuga, iste repellendus quos
          ad aliquam rem libero voluptates reprehenderit deserunt laborum
          accusamus labore at optio nemo quasi? Veritatis, eius cupiditate
          facilis vero beatae tempore optio veniam! Provident molestiae
          repellat, minima fugiat esse cupiditate neque commodi, explicabo vitae
          at natus, impedit debitis maiores expedita reiciendis! Quod.
        </div>
      </div>
    </div>
  );
}
