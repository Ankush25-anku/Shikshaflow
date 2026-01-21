import React from "react";
import HeroBanner2 from "./Components/HeroBanner/HeroBanner2";
import About2 from "./Components/About/About2";
import Feature3 from "./Components/Feature/Feature3";
import HowWork2 from "./Components/HowWork/HowWork2";
import Choose2 from "./Components/Choose/Choose2";
import Choose3 from "./Components/Choose/Choose3";

import Testimonial2 from "./Components/Testimonial/Testimonial2";
// import Brand2 from "../Components/Brand/Brand2";
// import Blog1 from "../Components/Blog/Blog1";

const page = () => {
  return (
    <div>
      <HeroBanner2
        subtitle="<span>Shikshaflow</span> Smart Management"
        title="Streamline Administration <br> Empower Learning."
        btnname="Request a Demo"
        btnurl="/contact"
        btnname2="Explore Features"
        btnurl2="/about"
        img1="/assets/images/intro/schoolimage (1).png"
        img2="/assets/images/intro/introThumb2_2.png"
        img3="/assets/images/intro/introThumb2_3.png"
      ></HeroBanner2>
      <About2
        subtitle="About Us"
        title="A Powerful and User-Friendly Shikshaflow for Schools"
        content="Shikshaflow is designed to simplify school administration, enhance communication, and empower teachers, students, and parents. From attendance and fees to exams and reports, everything is managed on a single, easy-to-use platform."
        boximg1="/assets/images/icon/wcuIcon2_1.svg"
        boxtitle1="Seamless Communication"
        boxcontent1="Bridge the gap between teachers, students, and parents with instant updates and notifications."
        boximg2="/assets/images/icon/wcuIcon2_2.svg"
        boxtitle2="Smart Administration"
        boxcontent2="Automate daily tasks such as attendance, fee collection, and report generation with ease."
        img1="/assets/images/about/aboutThumb2_1.png"
        img2="/assets/images/about/aboutThumb2_2.png"
      ></About2>
      <Feature3></Feature3>
      <HowWork2></HowWork2>
      <Choose2
        img1="/assets/images/wcu/school erp3 (1).png"
        img2="/assets/images/wcu/wcuThumb2_2.png"
        img3="/assets/images/wcu/wcuThumb2_3.png"
        subtitle="Why Choose Shikshaflow"
        title="Simplify School Management & Boost Collaboration"
        content="Shikshaflow is built to make academic and administrative tasks easier for schools. From attendance tracking to fee collection and student performance, everything is managed seamlessly on one unified platform."
        boximg1="/assets/images/icon/wcuIcon2_1.svg"
        boxtitle1="Seamless Communication"
        boxcontent1="Keep teachers, students, and parents connected with instant updates and notifications."
        boximg2="/assets/images/icon/wcuIcon2_2.svg"
        boxtitle2="Smart Administration"
        boxcontent2="Automate daily operations like attendance, exams, and fee management with ease."
      ></Choose2>

      <Choose3></Choose3>
      {/* <Pricing2></Pricing2> */}
      <Testimonial2></Testimonial2>
      {/* <Brand2></Brand2>
      <Blog1></Blog1> */}
    </div>
  );
};

export default page;
