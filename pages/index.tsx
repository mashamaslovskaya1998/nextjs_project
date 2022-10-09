import Link from "next/link";

const Index = () => {
  return (
    <div>
      <Link href={"/books"} className="">
        <a className="text-5xl font-bold flex justify-center mt-10">Books</a>
      </Link>
    </div>
  );
};
export default Index;
