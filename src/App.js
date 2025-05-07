import React, { useEffect, useState } from "react";
import logo from "../src/assets/image/Logo.png";
import "./App.css";

function App() {
  const words = [
    "Blogger.",
    "Web Design.",
    "Developer.",
    "Photographer.",
    "Marketing.",
  ];
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const typingSpeed = isDeleting ? 50 : 150;

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setText((prev) => prev.slice(0, -1)); // xoá từng ký tự
      } else {
        setText(currentWord.slice(0, text.length + 1)); // thêm ký tự
      }

      // Khi hoàn tất một từ
      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 3000); // dừng lại chút rồi xoá
      }

      // Khi xoá xong
      if (isDeleting && text === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);
  return (
    <div className="App">
      {/* Phần này là Top Header*/}
      <div className="topbar">
        <div className="topbar-left">
          <img
            src={logo}
            className="logo-color"
            alt="Colorlib logo"
            height={30}
            widths={130}
          />
          <span className="topbar-title" alt="Select a Product">+ RONALDO</span>
        </div>
        <div className="topbar-right">
          <span className="topbar-icon">
            <i className="fa fa-desktop"></i>
          </span>
          <span className="topbar-icon">
            <i className="fa-solid fa-tablet-screen-button"></i>
          </span>
          <span className="topbar-icon">
            <i className="fa-solid fa-mobile-screen-button"></i>
          </span>
          <span className="topbar-icon cart active">
            <i className="fa-solid fa-cart-shopping"></i>
          </span>
          <span className="topbar-icon">
            <i className="fa-solid fa-xmark"></i>
          </span>
        </div>
      </div>
      {/* Phần này là Header*/}
      <header className="header">
        <div className="logo">
            <span className="logo-circle">R</span>
            <span className="logo-text"><span className="highlightR">R</span>onaldo</span>
        </div>
        <nav>
          <a href="#home" className="nav-link">
            Home
          </a>
          <a href="#about" className="nav-link">
            About
          </a>
          <a href="#resume" className="nav-link">
            Resume
          </a>
          <a href="#services" className="nav-link">
            Services
          </a>
          <a href="#projects" className="nav-link">
            Projects
          </a>
          <a href="#blog" className="nav-link">
            My Blog
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </nav>
      </header>

      {/* Hero Section phần giới thiệu nổi bật*/}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-subtitle">HEY! I AM</p>
          <h1 className="hero-title">Ronaldo Fredrickson</h1>
          <h2 className="hero-desc">
            I'm a <span className="hero-highlight">{text}</span>
          </h2>
          <div className="hero-arrow">↓</div>
        </div>
      </section>
    </div>
  );
}

export default App;

/*
📅 Gợi ý quy trình mỗi ngày:
Làm việc trên project React như bình thường.

Cuối ngày (hoặc khi xong 1 phần), commit và push như sau:

bash
Sao chép
Chỉnh sửa
git add .
git commit -m "Day X: Hoàn thành <tính năng gì đó>"
git push
Ví dụ: git commit -m "Day 10: Hoàn thành trang đăng nhập"

*/

/*SSH key của mình có file tên là khai29112004 */
