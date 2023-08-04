import React from 'react';

function Portfolio() {
  return (
    <div className="containers-portfolio">
      <div className="section-heading">
        <div className="lg:col-span-6 text-center mx-auto">
          <h3>
            <span>Latest Projects</span>
          </h3>
        </div>
      </div>
      <div className="portfolio-box">
        <div className="design image-left">
          <div className="portfolio-img image">
            <img
              src="/images/project-1.jpg"
              alt="Image"
              className="w-588 h-656"
            />
            <a className="gallery-link gallery-link-icon">
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>
          <div className="portfolio-text">
            <h6>
              <span>Web Design</span>
            </h6>
            <h4>Website Design for Marketing Agency Startup</h4>
            <p>
              I design and develop services for customers of all sizes,
              specializing in creating stylish, modern websites, web services,
              and online stores
            </p>
            <div className="contact-now-container">
              <a href="#" className="contact-now-btn">
                View Project
              </a>
            </div>
          </div>
        </div>
        <div
          className="design image-left"
          style={{ flexDirection: 'row-reverse' }}
        >
          <div className="portfolio-img image">
            <img
              src="/images/project-2.jpg"
              alt="Image"
              className="w-588 h-656"
            />
            <a className="gallery-link gallery-link-icon">
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>
          <div className="portfolio-text">
            <h6>
              <span>Web Design</span>
            </h6>
            <h4>Website Design for Marketing Agency Startup</h4>
            <p>
              I design and develop services for customers of all sizes,
              specializing in creating stylish, modern websites, web services,
              and online stores
            </p>
            <div className="contact-now-container">
              <a href="#" className="contact-now-btn">
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
