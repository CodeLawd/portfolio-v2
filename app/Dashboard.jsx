"use client";

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

const Dashboard = () => {
  return (
    <div className="bg-primary">
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
};

export default Dashboard;
