import Head from "next/head";

import css from "../styles/PageOne.module.scss";

const Home = () => (
  <div className="container test_class">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className="class">
      <h1 className={css.class__title}>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
    </main>

    <footer>This is footer</footer>
  </div>
);

export default Home;
