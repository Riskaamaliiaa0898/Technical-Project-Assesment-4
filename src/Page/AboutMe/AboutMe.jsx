import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Judul from "../../components/Judul Halaman/Judul";
import Photo from "../../assets/Photo.jpg";

function AboutMe() {
  return (
    <>
      <Navbar />
      <br />
      <Judul id="text-center" text="About Me" />
      <br />
      <br />
      <div className="container">
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={Photo} className="img-fluid rounded-start" alt="Foto" width={"250px"} />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h2 className="card-title">Riska Amalia</h2>
                <br />
                <p className="card-text">Tempat Tanggal Lahir : Sumbawa, 02 Agustus 1998</p>
                <p className="card-text">Lulusan : Universitas Samawa Sumbawa Besar</p>
                <p className="card-text">
                  Alamat : Jalan Kebayan Gang Pramuka 5 RT.002 Wr.011 Kelurahan Brang Biji, Kecamatan Sumbawa, Provinsi NTB.
                  <br />
                  <br />
                  <br />
                  <small className="text-muted">Jenis Kelamin : Perempuan</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
