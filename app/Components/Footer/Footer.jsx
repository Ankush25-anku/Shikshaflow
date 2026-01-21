import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer-section position-relative">
      <div className="footer-widgets-wrapper style1 fix">
        <div className="shape1">
          <img src="/assets/images/shape/footerShape1_1.png" alt="shape" />
        </div>
        <div className="shape2">
          <img src="/assets/images/shape/footerShape1_2.png" alt="shape" />
        </div>
        <div className="shape3">
          <img src="/assets/images/shape/footerShape1_3.png" alt="shape" />
        </div>

        <div className="container">
          <div className="row">
            {/* LOGO + DESCRIPTION */}
            <div
              className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <Link href="/">
                    <Image
                      src="/assets/images/logo/RClogo3.png"
                      alt="RCERP TECHNOLOGIES PVT LTD Logo"
                      width={177}
                      height={54}
                    />
                  </Link>
                </div>

                <div className="footer-content">
                  <p>
                    RCERP TECHNOLOGIES PVT LTD specializes in building custom
                    ERP systems and modern websites to help businesses
                    streamline operations and enhance their digital presence.
                  </p>

                  <div className="store-links">
                    <div className="apple">
                      <a href="#">App Store</a>
                    </div>
                    <div className="play">
                      <a href="#">Play Store</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* PAGES */}
            <div
              className="col-xl-2 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h3>Pages</h3>
                </div>
                <ul className="list-area">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  <li>
                    <Link href="/project">Integrations</Link>
                  </li>
                  <li>
                    <Link href="/service">Features</Link>
                  </li>
                  <li>
                    <Link href="/pricing">Pricing</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* UTILITY PAGES */}
            <div
              className="col-xl-2 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".8s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h3>Utility Pages</h3>
                </div>
                <ul className="list-area">
                  <li>
                    <Link href="/project">Integrations</Link>
                  </li>
                  <li>
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact Us</Link>
                  </li>
                  <li>
                    <Link href="/pricing">Pricing</Link>
                  </li>
                  <li>
                    <Link href="/project/project-details">Project Details</Link>
                  </li>
                  <li>
                    <Link href="/team">Our Team</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* CONTACT */}
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="single-footer-widget">
                <div className="contact-box">
                  <div className="subtitle">Contact</div>
                  <div className="widget-head">Get in Touch</div>
                  <div className="text">
                    Reach out to us for custom ERP solutions and website
                    development services.
                  </div>

                  <div className="info">
                    <div className="link">
                      <a href="mailto:ravichandra@rctechbox.com">
                        ravichandra@rctechbox.com
                      </a>
                    </div>
                  </div>

                  <div className="info">
                    <div className="link">
                      <a href="tel:+917892104196">+91 7892104196</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* COPYRIGHT SECTION */}
      <div className="footer-bottom style1">
        <div className="container">
          <div className="footer-wrapper d-flex align-items-center justify-content-between">
            <p className="wow fadeInLeft" data-wow-delay=".3s">
              Copyright © {new Date().getFullYear()} RCERP TECHNOLOGIES PVT LTD.
              All rights reserved.
            </p>

            <ul className="social-links" data-wow-delay=".5s">
              <li>
                <a href="#">
                  <i className="bi bi-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bi bi-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bi bi-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bi bi-pinterest"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
