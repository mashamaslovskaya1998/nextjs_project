import Link from "next/link";

const Index = () => {
  return (
    <div>
      <h1>Hello</h1>
      <p>
        <Link href={"/books"}>
          <a>Books</a>
        </Link>
      </p>
    </div>
  );
};
export default Index;
