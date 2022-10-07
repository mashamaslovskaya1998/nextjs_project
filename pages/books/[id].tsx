import { NextPageContext } from "next";
import Router, { useRouter } from "next/router";
import { resourceLimits } from "worker_threads";
import { IAuthor, IBooks } from "../../types";

// interface IBookProps {
//   ctx: any;
// }
// interface IBookProps {
//   results: any;
// }
// interface IBookParamsProps {
//   params: IBooks[];
// }
// export default function Book({ results }: IBookProps) {
//   // const { query } = useRouter();
//   // console.log(router);
//   return (
//     <>
//       <h1>{results.title}</h1>
//     </>
//   );
// }
// export const getStaticProps = async ({ params }: IBookParamsProps) => {
//   const response = await fetch(`http://gutendex.com/books/${id}`);
//   const result = await response.json();
//   return {
//     props: { result },
//   };
// };

interface IBookPageProps {
  result: IBooks;
  authors: IAuthor;
}

// export default function Book({ result }: IBookPageProps) {
//   return <h1>{result.title}</h1>;
// }
// Book.getInitialProps = async ({ query }: NextPageContext) => {
//   const response = await fetch(`http://gutendex.com/books/${query.id}`);
//   const result = await response.json();
//   return {
//     props: { result },
//   };
// };

export default function Book({ result, authors }: IBookPageProps) {
  const router = useRouter();
  return (
    <>
      <h1>Post {router.query.id}</h1>
      <p>{result.title}</p>
      <p>{result.bookshelves}</p>
      <p>Количество загрузок: {result.download_count}</p>
    </>
  );
}
export async function getServerSideProps({ query }: NextPageContext) {
  const response = await fetch(`http://gutendex.com/books/${query.id}`);
  const result = await response.json();
  return {
    props: { result },
  };
}
