import React from "react";
import HeroBanner2 from "./Components/HeroBanner/HeroBanner2";
import About2 from "./Components/About/About2";
import Feature3 from "./Components/Feature/Feature3";
import HowWork2 from "./Components/HowWork/HowWork2";
import Choose2 from "./Components/Choose/Choose2";
import Choose3 from "./Components/Choose/Choose3";

/* =========================
   SEO METADATA (IMPORTANT)
========================= */
export const metadata = {
  title: "ShikshaFlow – School ERP Software for Indian Schools",
  description:
    "ShikshaFlow is a modern school ERP software to manage students, fees, attendance, exams, staff, and parent communication efficiently.",
};

const page = () => {
  return (
    <div>
      {/* =========================
          HERO SECTION (H1 FIXED)
      ========================= */}
      <HeroBanner2
        subtitle="<span>ShikshaFlow</span> School ERP Software"
        title="School ERP Software to Streamline Administration & Empower Learning"
        btnname="Request a Demo"
        btnurl="/contact"
        btnname2="Explore Features"
        btnurl2="/about"
        img1="/assets/images/intro/schoolimage (1).png"
        img2="/assets/images/intro/introThumb2_2.png"
        img3="/assets/images/intro/introThumb2_3.png"
      />

      {/* =========================
          SEO TEXT SECTION
          (VERY IMPORTANT FOR RANKING)
      ========================= */}
      <section className="container mt-5">
        <h2>All-in-One School ERP Software</h2>
        <p>
          ShikshaFlow is a comprehensive school ERP software designed for Indian
          schools to manage academics and administration efficiently. From
          student admissions and attendance tracking to fee management, exams,
          and parent communication, ShikshaFlow provides a unified digital
          platform that simplifies daily school operations and improves
          collaboration between administrators, teachers, students, and parents.
        </p>

        <p>
          Schools using{" "}
          <a href="/school-erp-software">
            <strong>ShikshaFlow School ERP Software</strong>
          </a>{" "}
          can reduce manual work, improve accuracy, and gain real-time insights
          into academic performance and administrative processes.
        </p>
      </section>

      {/* =========================
          ABOUT SECTION
      ========================= */}
      <About2
        subtitle="About Us"
        title="A Powerful and User-Friendly School ERP for Schools"
       content="ShikshaFlow is designed to simplify school administration, enhance communication, and empower teachers, students, and parents. Learn how our School ERP Software helps manage attendance, fees, exams, and reports on a single, easy-to-use platform."
        boximg1="/assets/images/icon/wcuIcon2_1.svg"
        boxcontent1="Bridge the gap between teachers, students, and parents with instant updates and notifications."
        boximg2="/assets/images/icon/wcuIcon2_2.svg"
        boxtitle2="Smart Administration"
        boxcontent2="Automate daily tasks such as attendance, fee collection, and report generation with ease."
        img1="/assets/images/about/aboutThumb2_1.png"
        img2="/assets/images/about/aboutThumb2_2.png"
      />

      {/* =========================
          FEATURES & WORKFLOW
      ========================= */}
      <Feature3 />
      <HowWork2 />

      {/* =========================
          WHY CHOOSE SECTION
      ========================= */}
      <Choose2
        img1="/assets/images/wcu/school erp3 (1).png"
        img2="/assets/images/wcu/wcuThumb2_2.png"
        img3="/assets/images/wcu/wcuThumb2_3.png"
        subtitle="Why Choose ShikshaFlow"
        title="Simplify School Management & Boost Collaboration"
        content="ShikshaFlow is built to make academic and administrative tasks easier for schools. From attendance tracking to fee collection and student performance, everything is managed seamlessly on one unified platform."
        boximg1="/assets/images/icon/wcuIcon2_1.svg"
        boxtitle1="Seamless Communication"
        boxcontent1="Keep teachers, students, and parents connected with instant updates and notifications."
        boximg2="/assets/images/icon/wcuIcon2_2.svg"
        boxtitle2="Smart Administration"
        boxcontent2="Automate daily operations like attendance, exams, and fee management with ease."
      />

      <Choose3 />
    </div>
  );
};

export default page;
