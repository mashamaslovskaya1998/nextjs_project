import { NextPageContext } from "next";
import Router, { useRouter } from "next/router";
import { resourceLimits } from "worker_threads";
import { IAuthor, IBooks } from "../../types";

interface IBookPageProps {
  result: IBooks;
  authors: IAuthor;
}

export default function Book({ result, authors }: IBookPageProps) {
  const router = useRouter();
  return (
    <div className="my-0 mx-auto max-w-7xl w-full">
      <h1 className="text-3xl font-bold text-center mb-10">
        Post {router.query.id}
      </h1>

      <p className="mb-3 font-bold text-xl text-center ">{result.title}</p>
      <img src={result.formats.image} alt={result.title} />
      <p className="mb-3">{result.bookshelves}</p>
      <p className="mb-3">
        {result.subjects ? result.subjects : "No subjects"}
      </p>

      <p className="mb-3 italic text-gray-500">
        Количество загрузок: {result.download_count}
      </p>
    </div>
  );
}
export async function getServerSideProps({ query }: NextPageContext) {
  const response = await fetch(`${process.env.API_KEY}/${query.id}`);
  const result = await response.json();
  return {
    props: { result },
  };
}
