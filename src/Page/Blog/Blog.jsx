import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Judul from "../../components/Judul Halaman/Judul";

function Blog() {
  return (
    <>
      <Navbar />
      <br />
      <Judul id="text-center" text="Blog" />
      <br />
      <br />
      <div className="container-sm">
        <div className="col-lg-12">
          <p className="card-text">
            <img
              src="https://img.freepik.com/premium-photo/startup-business-young-creative-professionals-people-team-discussing-meeting-bright-office-while-pointing-dual-monitor-screen-computer-suggestions-help-project_530697-4409.jpg?size=626&ext=jpg&ga=GA1.2.329440172.1660900196"
              alt="Foto"
              className="Foto"
            />
            <br />
            <br />
            Cerita singkat keseharian saya. Saat ini saya sedang mengikuti kegiatan Pelatihan AMMAN Coding Bootcamp Bacth 3 yang diselenggarakan oleh PT. AMMAN Mineral yang bekerja sama dengan SKILVUL. Program ini merupakan program beasiswa
            yang ditujukan kepada calon-calon talenta digital yang memiliki KTP Kabupaten Sumbawa Barat dan Sumbawa, Nusa Tenggara Barat. Dalam mengisi waktu kosong, saya ingin belajar ilmu baru agar nantinya ilmu ini dapat saya gunakan di
            dunia pekerjaan.
          </p>
        </div>
      </div>
    </>
  );
}

export default Blog;
