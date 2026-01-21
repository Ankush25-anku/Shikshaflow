"use client";
import { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import parse from "html-react-parser";
import Link from "next/link";
import Image from "next/image";
import styles from "./HeroBanner2.module.css"; // ✅ import CSS module

const HeroBanner2 = ({
  bgimg,
  subtitle,
  title,
  btnname,
  btnurl,
  btnname2,
  btnurl2,
  img1,
  img2,
  img3,
}) => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <section className="intro-section">
      <div className="intro-container-wrapper style2 section-padding pt-0">
        {/* Dynamic Background with Overlay */}
        <div
          className={`${styles.wrapper} intro-wrapper style2 bg-cover`}
          style={{
            backgroundImage: `linear-gradient(rgba(46,0,139,0.85), rgba(46,0,139,0.85)), url(${bgimg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* ✅ Overlay Layer */}
          <div className={styles.overlay}></div>

          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                {/* ✅ Content Layer */}
                <div className={`${styles.content} intro-content`}>
                  <div className="intro-section-title">
                    <div
                      className={`${styles.subtitle} intro-subtitle wow fadeInUp`}
                      data-wow-delay=".4s"
                    >
                      {parse(subtitle)}{" "}
                      <Image
                        src="/assets/images/icon/fireIcon.svg"
                        alt="img"
                        width={16}
                        height={16}
                      />
                    </div>
                    <h1
                      className={`${styles.title} intro-title wow fadeInUp`}
                      data-wow-delay=".2s"
                    >
                      {parse(title)}
                    </h1>
                  </div>

                  {/* Buttons */}
                  <div
                    className="btn-wrapper style1 wow fadeInUp"
                    data-wow-delay=".2s"
                  >
                    <Link className="theme-btn" href={btnurl}>
                      {btnname}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_141_224)">
                          <path
                            d="M11.6118 3.61182L10.8991 4.32454L14.0706 7.49603H0V8.50398H14.0706L10.8991 11.6754L11.6118 12.3882L16 7.99997L11.6118 3.61182Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_141_224">
                            <rect width="16" height="16" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </Link>

                    <Link
                      className="theme-btn style3 wow fadeInUp"
                      data-wow-delay=".2s"
                      href={btnurl2}
                    >
                      {btnname2}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_141_223)">
                          <path
                            d="M11.6118 3.61182L10.8991 4.32454L14.0706 7.49603H0V8.50398H14.0706L10.8991 11.6754L11.6118 12.3882L16 7.99997L11.6118 3.61182Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_141_223">
                            <rect width="16" height="16" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image Thumbnails */}
        <div className="thumb-box">
          <div className="main-thumb">
            <Image
              className="img-custom-anim-left wow fadeInUp"
              src={img1}
              alt="img"
              width={1007}
              height={682}
            />
            <div className="thumb1 float-bob-y">
              <Image src={img2} alt="img" width={214} height={261} />
            </div>
            <div className="thumb2 float-bob-x">
              <Image src={img3} alt="img" width={178} height={232} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner2;
