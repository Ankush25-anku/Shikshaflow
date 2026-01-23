import React from "react";

/* =========================
   SEO METADATA
========================= */
export const metadata = {
  title: "School ERP Software – ShikshaFlow",
  description:
    "ShikshaFlow is a powerful school ERP software for Indian schools to manage students, fees, attendance, exams, staff, and parent communication efficiently.",
};

const SchoolErpSoftwarePage = () => {
  return (
    <div className="container mt-5 mb-5">
      {/* =========================
          H1 – MAIN KEYWORD
      ========================= */}
      <h1>School ERP Software for Modern Schools</h1>

      <p>
        ShikshaFlow is an all-in-one <strong>school ERP software</strong> designed
        to simplify academic and administrative operations for schools. It helps
        school management digitize daily processes such as admissions,
        attendance, fee collection, examinations, and communication between
        teachers, students, and parents.
      </p>

      {/* =========================
          WHAT IS SCHOOL ERP
      ========================= */}
      <h2>What is School ERP Software?</h2>
      <p>
        School ERP software is a centralized digital system that helps schools
        manage academics, administration, and communication efficiently.
        Instead of using manual registers or disconnected tools, a school ERP
        system provides a single platform to handle student records, staff
        management, fees, attendance, exams, and reports.
      </p>

      <p>
        ShikshaFlow School ERP Software is built specifically for Indian schools,
        focusing on ease of use, accuracy, and real-time access to information.
      </p>

      {/* =========================
          PROBLEMS WITHOUT ERP
      ========================= */}
      <h2>Problems Schools Face Without ERP Software</h2>
      <ul>
        <li>Manual attendance and fee tracking</li>
        <li>Data errors and duplicate records</li>
        <li>Lack of communication between parents and teachers</li>
        <li>Time-consuming report generation</li>
        <li>No centralized student information system</li>
      </ul>

      {/* =========================
          HOW SHIKSHAFLOW HELPS
      ========================= */}
      <h2>How ShikshaFlow School ERP Solves These Problems</h2>
      <p>
        ShikshaFlow automates and simplifies daily school operations by providing
        a unified dashboard for administrators, teachers, and parents. With
        real-time access to data, schools can reduce manual work, improve
        accuracy, and enhance collaboration.
      </p>

      {/* =========================
          FEATURES
      ========================= */}
      <h2>Key Features of ShikshaFlow School ERP Software</h2>
      <ul>
        <li>Student admission and profile management</li>
        <li>Attendance tracking for students and staff</li>
        <li>Online and offline fee management</li>
        <li>Exam management and report cards</li>
        <li>Parent-teacher communication portal</li>
        <li>Staff and teacher management</li>
        <li>Secure cloud-based access</li>
      </ul>

      {/* =========================
          WHY CHOOSE
      ========================= */}
      <h2>Why Choose ShikshaFlow for Your School?</h2>
      <p>
        ShikshaFlow is built with a focus on simplicity, scalability, and
        performance. Whether you are a small school or a large educational
        institution, ShikshaFlow adapts to your needs and helps you manage your
        school efficiently.
      </p>

      <ul>
        <li>User-friendly interface</li>
        <li>Affordable pricing</li>
        <li>Designed for Indian education system</li>
        <li>Secure and reliable platform</li>
        <li>Dedicated support and training</li>
      </ul>

      {/* =========================
          FAQ SECTION (VERY IMPORTANT)
      ========================= */}
      <h2>Frequently Asked Questions</h2>

      <h3>Is ShikshaFlow suitable for small schools?</h3>
      <p>
        Yes, ShikshaFlow is designed for schools of all sizes, including small
        and medium-sized institutions.
      </p>

      <h3>Can parents access the school ERP system?</h3>
      <p>
        Yes, parents can log in to view attendance, fees, exam results, and
        receive important notifications from the school.
      </p>

      <h3>Is ShikshaFlow cloud-based?</h3>
      <p>
        Yes, ShikshaFlow is a secure cloud-based school ERP software accessible
        from anywhere.
      </p>

      <h3>Does ShikshaFlow support fee management?</h3>
      <p>
        Yes, ShikshaFlow supports complete fee management including tracking,
        receipts, and reports.
      </p>

      {/* =========================
          CTA
      ========================= */}
      <div className="mt-4">
        <h2>Request a Demo</h2>
        <p>
          Looking for the best school ERP software for your institution? Contact
          us today to request a demo of ShikshaFlow.
        </p>
        <a href="/contact" className="btn btn-primary">
          Request a Demo
        </a>
      </div>
    </div>
  );
};

export default SchoolErpSoftwarePage;
