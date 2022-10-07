import Link from "next/link";
import { IAuthor, IBooks } from "../types";

interface IBookListProps {
  data: IBooks[];
  authors: IBooks[];
}

export const getServerSideProps = async () => {
  const response = await fetch("http://gutendex.com/books/");
  const results = await response.json();
  const data = results.results;

  return {
    props: { data },
  };
};
export default function Books({ data, authors }: IBookListProps) {
  // const [books, setBooks] = useState([]);
  // useEffect(() => {
  //   async function load() {
  //     const response = await fetch("http://gutendex.com/books");
  //     const json = await response.json();
  //     setBooks(json);
  //   }
  //   load();
  // }, []);
  // console.log(data);
  return (
    <div>
      <h1>Список книг</h1>
      <ul>
        {data.map((result) => (
          <li key={result.id}>
            <Link href={`/books/[id]`} as={`/books/${result.id}`}>
              <a>{result.title}</a>
            </Link>
            {/* <p>{result.authors.name}</p> */}
            <p>Количество загрузок: {result.download_count}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
