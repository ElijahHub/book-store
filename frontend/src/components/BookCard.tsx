import SingleCard from "./SingleCard";

type Books = {
  _id: string;
  title: string;
  author: string;
  publishYear: string;
};

export default function BookCard({ data }: { data: Books[] }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {data.map((item) => (
        <SingleCard key={item._id} data={item} />
      ))}
    </div>
  );
}
