import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Phần này là Header*/}
      <header className="header">
        <div className="logo">
          <span className="logo-circle">R</span>
          <span className="logo-text">onaldo</span>
        </div>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#resume">Resume</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#blog">My Blog</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero Section phần giới thiệu nổi bật*/}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-subtitle">HEY! I AM</p>
          <h1 className="hero-title">Ronaldo Fredrickson</h1>
          <h2 className="hero-desc">
            I'm a <span className="highlight">Photograph</span>
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