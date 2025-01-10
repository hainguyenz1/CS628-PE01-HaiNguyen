import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <div className="resume">
      <header className="header">
        <h1>Hai Nguyen</h1>
        <p>15323 14th Pl W, Lynnwood, WA USA, 98087 | (206)681-0465 | hainguyen29100@gmail.com</p>
      </header>

      <section className="section">
        <h2>Education</h2>
        <div className="education">
          <h3>Master of Science in Computer Science</h3>
          <p>City University of Seattle, WA USA | June 2025</p>
          <p>GPA: 4.0/4.0</p>
          <h3>Bachelor of Science in Business Administration</h3>
          <p>City University of Seattle, WA USA | June 2023</p>
          <p>GPA: 3.82/4.0</p>
        </div>
      </section>

      <section className="section">
        <h2>Projects</h2>
        <div className="projects">
          <h3>Personal Website</h3>
          <p>
            Built a personal website using React and deployed it on GitHub Pages
          </p>
          <p>
            Source code:{" "}
            <a
              href="https://github.com/HaiNguyen/MyResume"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/HaiNguyen/hainguyenz1/MyResume
            </a>
          </p>

          <h3>Online Bookstore</h3>
          <p>
            Developed a web application for an online bookstore using Spring Boot and MySQL
          </p>
          <p>
            Source code:{" "}
            <a
              href="https://github.com/HaiNguyen/online-bookstore"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/HaiNguyen/online-bookstore
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Resume;