import "../Home/Home.css";
import React from "react";
import Navbar from "../../components/Navbar/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <br />
      <div className="row">
        <div className="col-lg-12">
          <div className="container-sm">
            <header className="masthead">
              <div className="container-fluid-halaman">
                <div className="masthead-subheading">Selamat Datang Di WebSite Personal</div>
                <div className="masthead-heading">Riska Amalia</div>
              </div>
              <img
                src="https://img.freepik.com/free-vector/greater-than-less-than-sign-wrench-gear-hands-tools-programmer-flat-vector-illustration-programming-coding-process-modern-technology-occupation-concept_74855-24577.jpg?size=626&ext=jpg&ga=GA1.2.329440172.1660900196"
                alt="Foto"
                className="Foto"
              />
            </header>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
