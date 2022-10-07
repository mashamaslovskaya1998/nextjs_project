interface IApp {
  Component: string;
  pageProps: any;
}
export default function MyApp({ Component, pageProps }: IApp) {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>
        {`
          body {
            font-family: "Montserrat", sans-serif;
          }
        `}
      </style>
    </>
  );
}
