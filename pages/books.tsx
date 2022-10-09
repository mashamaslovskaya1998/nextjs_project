import Link from "next/link";
import { useState } from "react";
import { IAuthor, IBooks } from "../types";
import { useForm } from "react-hook-form";
import { NextRouter, useRouter } from "next/router";
// import getConfig from "next/config";

interface IBookListProps {
  data: IBooks[];
  authors: IBooks[];
  router: NextRouter;
}
// const { serverRuntimeConfig, PublicRuntimeConfig } = getConfig();

export const getServerSideProps = async () => {
  const response = await fetch(`${process.env.API_KEY}`);
  const results = await response.json();
  const data = results.results;

  return {
    props: { data },
  };
};
export default function Books({ data, authors }: IBookListProps) {
  // const [searchResults, setSearchResults] = useState([]);
  // const [formInput, setFormInput] = useState({});
  // const [searchTerm, setSearchTerm] = useState();
  // const handleInputs = (event: any) => {
  //   let { name, value } = event.target;
  //   setFormInput({ ...formInput, [name]: value });
  //   setSearchTerm(event.target.value);
  // };
  // const search = async (event: any) => {
  //   event.preventDefault();
  //   let books = await fetch(`http://gutendex.com/books/search/${}`);
  //   books = await books.json();
  //   setFormInput(books.results);
  // };

  const { register, handleSubmit } = useForm();
  // const router = useRouter();
  // const onSubmit = (data:any) =>{
  //   router
  // }
  const router = useRouter();
  const onSubmit = (data: any) => {
    router.push(`/books/search/${data.title}/1`);
  };

  return (
    <div className="text-center my-0 mx-auto max-w-7xl w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="text-center m-3">
        <input
          type="text"
          placeholder="Search"
          {...register("title")}
          className="border border-black p-2 mr-2 rounded-lg max-w-sm w-full"
        ></input>
        <button className="btn-search border border-black p-2 rounded-lg">
          Search
        </button>
      </form>
      <h1 className="text-2xl font-bold text-center mb-8">Список книг</h1>
      <ul className=" grid md:grid-cols-4 sm:grid-cols-2 items-stretch gap-6 ">
        {data.map((result) => (
          <li key={result.id} className="border p-3 border-grey-9 rounded-lg ">
            <img src={result.formats} className=" block  " />
            <Link
              href={`/books/[id]`}
              as={`/books/${result.id}`}
              className=" visible visited:text-grey-600"
            >
              <a className=" font-bold ">{result.title}</a>
            </Link>

            <p className="italic text-gray-500">
              Количество загрузок: {result.download_count}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
