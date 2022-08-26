import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Judul from "../../components/Judul Halaman/Judul";

function Portofolio() {
  return (
    <>
      <Navbar />
      <br />
      <Judul id="text-center" text="Portofolio" />
      <br />
      <br />
      <br />
      <div className="card-group">
        <div className="card">
          <img src="https://img.freepik.com/free-photo/close-up-image-programer-working-his-desk-office_1098-18707.jpg?size=626&ext=jpg&ga=GA1.2.329440172.1660900196" className="card-img-top" alt="foto" />
          <div className="card-body">
            <h5 className="card-title">Tehnical Projeck Assesment 1</h5>
            <p className="card-text">WEB PERSONAL</p>
            <p className="card-text">
              <small className="text-muted">Week 1</small>
            </p>
          </div>
        </div>
        <div className="card">
          <img
            src="https://img.freepik.com/free-photo/selective-focus-african-american-it-employee-with-headset-working-remote-from-home-website-design-using-programming-technologies-computer-programmer-man-coding-digital-business-server_482257-30394.jpg?size=626&ext=jpg&ga=GA1.2.329440172.1660900196"
            className="card-img-top"
            alt="foto"
          />
          <div className="card-body">
            <h5 className="card-title">Tehnical Projeck Assesment 2</h5>
            <p className="card-text">BMI CALCULATE</p>
            <p className="card-text">
              <small className="text-muted">Week 3</small>
            </p>
          </div>
        </div>
        <div className="card">
          <img src="https://img.freepik.com/free-photo/it-engineer-analyzing-code_1098-21513.jpg?size=626&ext=jpg&ga=GA1.2.329440172.1660900196" className="card-img-top" alt="foto" />
          <div className="card-body">
            <h5 className="card-title">Tehnical Projeck Assesment 3</h5>
            <p className="card-text">APP Movie</p>
            <p className="card-text">
              <small className="text-muted">Week 5</small>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portofolio;
