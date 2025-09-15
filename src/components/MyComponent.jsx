import React from 'react';

export default function MyComponent(props) {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="logo">
            <i className="fas fa-star" />
            <span>Tư Tưởng Hồ Chí Minh</span>
          </div>
          <div className="mobile-menu-toggle">
            <i className="fas fa-bars" />
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="hero-background">
          <div className="historical-overlay" />
          <div className="vintage-pattern" />
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-ornament top">
              <div className="ornament-line" />
              <i className="fas fa-star ornament-star" />
              <div className="ornament-line" />
            </div>

            <h1 className="hero-title">Tư Tưởng Hồ Chí Minh</h1>
            <h2 className="hero-subtitle">Di Sản Vĩ Đại Của Dân Tộc Việt Nam</h2>

            <div className="hero-quote">
              <div className="quote-mark left">"</div>
              <p className="quote-text">Không có gì quý hơn độc lập tự do</p>
              <div className="quote-mark right">"</div>
              <div className="quote-author">- Chủ tịch Hồ Chí Minh -</div>
            </div>

            <div className="hero-ornament bottom">
              <div className="ornament-line" />
              <i className="fas fa-star ornament-star" />
              <div className="ornament-line" />
            </div>

            <a href="#tong-quan" className="cta-button">
              <i className="fas fa-book-open" />
              Khám Phá Tư Tưởng
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
