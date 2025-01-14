// import React from "react";
// import "./Footer.css"

// const Footer = () => {
//   return (
//     <footer
//       className="section footer-classic context-dark bg-image"
//       style={{ background: "#2d3246" }}
//     >
//       <div className="container">
//         <div className="row row-30">
//           <div className="col-md-4 col-xl-5">
//             <div className="pr-xl-4">
              
//               <p>
//                 We are an award-winning creative agency, dedicated to the best
//                 result in web design, promotion, business consulting, and
//                 marketing.
//               </p>
//               {/* Rights */}
//               <p className="rights">
//                 <span>© </span>
//                 <span className="copyright-year">2018</span>
//                 <span> Waves. All Rights Reserved.</span>
//               </p>
//             </div>
//           </div>
//           <div className="col-md-4">
//             <h5>Contacts</h5>
//             <dl className="contact-list">
//               <dt>Address:</dt>
//               <dd> Subhaspully, Alipurduar </dd>
//             </dl>
//             <dl className="contact-list">
//               <dt>Email:</dt>
//               <dd>
//                 <a href="mailto:ranits708@gmail.com">ranits708@gmail.com</a>
//               </dd>
//             </dl>
//             <dl className="contact-list">
//               <dt>Instagram:</dt>
//               <dd>
//                 <a href="https://karosearch.com">https://karosearch.com</a>{" "}
//                 <span>or</span>{" "}
//                 <a href="https://karosearch.com">https://karosearch.com</a>
//               </dd>
//             </dl>
//           </div>
//           <div className="col-md-4 col-xl-3">
//             <h5>Links</h5>
//             <ul className="nav-list">
//               <li>
//                 <a href="#">About</a>
//               </li>
//               <li>
//                 <a href="#">Projects</a>
//               </li>
//               <li>
//                 <a href="#">Blog</a>
//               </li>
//               <li>
//                 <a href="#">Contacts</a>
//               </li>
//               <li>
//                 <a href="#">Pricing</a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//       <div className="row no-gutters social-container">
//         <div className="col">
//           <a className="social-inner" href="#">
//             <span className="icon mdi mdi-facebook"></span>
//             <span>Facebook</span>
//           </a>
//         </div>
//         <div className="col">
//           <a className="social-inner" href="#">
//             <span className="icon mdi mdi-instagram"></span>
//             <span>Instagram</span>
//           </a>
//         </div>
//         <div className="col">
//           <a className="social-inner" href="#">
//             <span className="icon mdi mdi-twitter"></span>
//             <span>Twitter</span>
//           </a>
//         </div>
//         <div className="col">
//           <a className="social-inner" href="#">
//             <span className="icon mdi mdi-youtube-play"></span>
//             <span>Google</span>
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


















import React from 'react';
import "./Footer.css"

const Footer = () => {
  return (
    <>
      <footer className="bg-body-tertiary text-center">
        <div className="container p-4 pb-0">
          <section className="mb-4">
            <a
              data-mdb-ripple-init
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: '#3b5998' }}
              href="#!"
              role="button"
            >
              <i className="fab fa-facebook-f"></i>
            </a>

            <a
              data-mdb-ripple-init
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: '#55acee' }}
              href="#!"
              role="button"
            >
              <i className="fab fa-twitter"></i>
            </a>

            <a
              data-mdb-ripple-init
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: '#dd4b39' }}
              href="#!"
              role="button"
            >
              <i className="fab fa-google"></i>
            </a>

            <a
              data-mdb-ripple-init
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: '#ac2bac' }}
              href="https://www.instagram.com/ig_ranit25?igsh=OTlrcmt4MjFjb2dq"
              role="button"
            >
              <i className="fab fa-instagram"></i>
            </a>

            <a
              data-mdb-ripple-init
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: '#0082ca' }}
              href="#!"
              role="button"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>

            <a
              data-mdb-ripple-init
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: '#333333' }}
              href="#!"
              role="button"
            >
              <i className="fab fa-github"></i>
            </a>
          </section>
        </div>

        <div
          className="text-center p-3"
          style={{ backgroundColor: 'rgb(168, 165, 165)' }}
        >
          © 2020 Copyright:
          <a className="text-body" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
