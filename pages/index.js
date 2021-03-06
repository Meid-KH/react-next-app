import Head from "next/head";
import Link from "next/link";

import Icon from "../components/Icon";
import css from "../styles/Page.module.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import PlayItem from "../components/PlayItem";

const Home = () => (
  <div className={css.page_wrapper}>
    <Head>
      <title>Homepage</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={css.main}>
      <section className={css.wrapper}>
        <Header />
        <div className={css.content}>
          <div className={css.container}>
            <h1 className={css.h1}>Playlists</h1>
            <ul className={css.playlist}>
              <PlayItem
                name="JoeRogan"
                title="JRE MMA Show #75 with Dan Hardy"
                description="Joe is joined by former welterweight fighter and UFC commentator, Dan Hardy."
                progress="48"
                likes="84"
                songs="96"
              />
              <PlayItem
                name="myfavoritemurder"
                title="MFM Minisode 13"
                description="Joe is joined by former welterweight fighter and UFC commentator, Dan Hardy."
                progress="79"
                likes="43"
                songs="87"
              />
              <PlayItem
                name="JoeRogan"
                title="JRE MMA Show #75 with Dan Hardy"
                description="Joe is joined by former welterweight fighter and UFC commentator, Dan Hardy."
                progress="48"
                likes="84"
                songs="96"
              />
            </ul>
          </div>
        </div>
        <Footer />
      </section>
      <Sidebar />
    </main>
  </div>
);

export default Home;
