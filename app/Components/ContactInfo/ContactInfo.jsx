"use client";
import React, { useState } from "react";

const ContactInfo = () => {
  const [result, setResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending...");

    const formData = new FormData(e.target);
    formData.append("access_key", "c1bfec21-80ce-4d32-8714-294eb7b9e90f");
    formData.append("subject", "New message from RC ERP Contact Form");
    formData.append("from_name", "RC ERP Website");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    setResult(
      data.success ? "Message sent successfully!" : "Failed to send message."
    );
    if (data.success) e.target.reset();
  };

  return (
    <div>
      {/* ⭐⭐⭐ CONTACT FORM + MAP ⭐⭐⭐ */}
      <section className="section-padding contact-container">
        <div className="container">
          <div className="row gx-5 gy-5 contact-row">
            {/* FORM */}
            <div className="col-xl-6 col-lg-6">
              <div className="contact-form style1 p-4 rounded-4 shadow-sm bg-white h-100">
                <h2 className="contact-title mb-2">Ready to Get Started?</h2>
                <p className="desc mb-4">
                  Send us a message and we’ll get back soon.
                </p>

                <form onSubmit={handleSubmit} className="contact-form-items">
                  <div className="row g-4">
                    <div className="col-lg-6">
                      <div className="form-clt">
                        <span>Your Name*</span>
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="form-clt">
                        <span>Your Email*</span>
                        <input
                          type="email"
                          name="email"
                          placeholder="Your Email"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-clt">
                        <span>Write Message*</span>
                        <textarea
                          name="message"
                          placeholder="Write Message"
                          required
                        ></textarea>
                      </div>
                    </div>

                    <div className="col-12">
                      <button type="submit" className="theme-btn w-100">
                        Send Message <i className="bi bi-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                </form>

                <p className="mt-3 text-center">{result}</p>
              </div>
            </div>

            {/* MAP */}
            <div className="col-xl-6 col-lg-6">
              <div className="contact-map rounded-4 overflow-hidden shadow-sm h-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.431430694108!2d77.75814737507963!3d13.01181948730563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae115c2336cb51%3A0x48a9d372986fd887!2s401%2C%20Seegehalli%20Rd%2C%20Krishnarajapuram%2C%20Bengaluru%2C%20Karnataka%20560115!5e0!3m2!1sen!2sin!4v1733380000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ⭐⭐⭐ CONTACT INFO BOXES ⭐⭐⭐ */}
      <section className="section-padding">
        <div className="container">
          <div className="row gy-4 justify-content-center">
            {/* Address */}
            <div className="col-xl-4 col-md-6">
              <div className="contact-info-box hover-box p-4 rounded-4 shadow-sm text-center">
                <h3 className="title mb-3">Our Address</h3>
                <p className="text m-0">
                  NO-401, Sri Lakmi Venkateshwara Nilaya, <br />
                  Seegehalli Main Road, <br />
                  Bengaluru – 560067
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="col-xl-4 col-md-6">
              <div className="contact-info-box hover-box p-4 rounded-4 shadow-sm text-center">
                <h3
                  className="title mb-3"
                  style={{ textTransform: "lowercase" }}
                >
                  <a href="mailto:ravichandra@rctechbox.com">
                    ravichandra@rctechbox.com
                  </a>
                </h3>
                <p className="text m-0">Email us anytime for any query.</p>
              </div>
            </div>

            {/* Phone */}
            <div className="col-xl-4 col-md-6">
              <div className="contact-info-box hover-box p-4 rounded-4 shadow-sm text-center">
                <h3 className="title mb-3">
                  <a href="tel:7892104196">Hot: +91-7892104196</a>
                </h3>
                <p className="m-0">Call us for support — we’re here to help.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ⭐⭐⭐ INLINE CSS ⭐⭐⭐ */}
      <style jsx>{`
        /* Equal height layout */
        .contact-row {
          display: flex;
          align-items: stretch;
        }

        .contact-map {
          height: 100%;
        }

        .contact-map iframe {
          height: 100% !important;
          width: 100%;
        }

        /* Hover background for contact boxes */
        .hover-box {
          background: #faf8ff;
          transition: all 0.3s ease-in-out;
          cursor: pointer;
        }

        .hover-box:hover {
          background: #6c63ff;
          color: #fff !important;
          transform: translateY(-5px);
        }

        .hover-box:hover a,
        .hover-box:hover .title,
        .hover-box:hover .text {
          color: #fff !important;
        }

        @media (max-width: 992px) {
          .contact-row {
            flex-direction: column;
          }
          .contact-map {
            height: 350px;
          }
          .contact-map iframe {
            height: 350px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactInfo;
