import Head from "next/head";
import {
  Header,
  Navbar,
  About,
  Experience,
  FeatureProject,
  OtherProjects,
  Article,
  Contact,
  Footer,
} from "../components";

export default function Home() {
  return (
    <div className="bg-primary">
      <Head>
        <title> Joshua Alexander </title> <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>{" "}
      <main>
        <Navbar />
        <Header />
        <About />
        <Experience />
        <FeatureProject />
        <OtherProjects />
        <Article />
        <Contact />
        <Footer />
      </main>{" "}
    </div>
  );
}
