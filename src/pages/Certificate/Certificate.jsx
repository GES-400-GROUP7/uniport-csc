// import React from "react";
// import Layout from "../../components/Layout/Layout";
// import "./Certificate.scss";

// function Certificate() {
//   return (
//     <Layout>
//       <main className="certificate">
//         <div className="cert_header">
//           <h1>Certificate Application</h1>
//         </div>
//         <div className="cert_body">
//           <div className="background">
//             <b>
//               Make sure to input your correct information (apply one once and
//               wait for a response via email)
//             </b>

//             <form
//               action="/submit-form"
//               method="POST"
//               enctype="multipart/form-data"
//             >
//               <label for="matriculation">Matriculation:</label>
//               <input
//                 className="ipt1"
//                 type="text"
//                 id="matriculation"
//                 name="matriculation"
//                 required
//               />
//               <br />

//               <label for="fullname">Full Name:</label>
//               <input className="ipt1" type="text" id="fullname" name="fullname" required />
//               <br />

//               <label for="email">Email:</label>
//               <input  type="email" id="email" name="email" required />
//               <br />
//               <textarea
//                 id="message"
//                 name="message"
//                 rows="4"
//                 required
//               ></textarea>
//               <br></br>

//               <div>
//                  <label for="olevel">Upload O'Level:</label>
//               <input
//                 type="file"
//                 id="olevel"
//                 name="olevel"
//                 accept=".pdf, .jpg, .png"
//                 required
//               />
//               <br></br>
//               </div>
             
//               <button type="submit">Submit</button>
//             </form>
//           </div>
//         </div>
//       </main>
//     </Layout>
//   );
// }

// export default Certificate;
