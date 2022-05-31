// import React, { useEffect, useState } from "react";
// import "./Nav.css";

// function Nav() {
//   const [show, handleShow] = useState(false);

//   useEffect(() => {
//     window.addEventListener("scroll", () => {
//       if (window.scrollY > 100) {
//         handleShow(true);
//       } else handleShow(false);
//     });
//     return () => {
//       window.removeEventListener("scroll");
//     };
//   }, []);

//   return (
//     // <div className={`nav ${show && "nav_black"}`}>
//     <div className="nav">
//       <img
//         className="nav_logo"
//         src="https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png"
//         alt="netflix logo"
//       />
//       <img
//         className="nav_avatar"
//         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpUxlpgcPQ1bjfII_6jJMhilqXL_xQsOMg8WjTXh9K1lg7ho_eo6UfMHdsEMNTz8vmvZw&usqp=CAU"
//         alt="Netflix logo"
//       />
//     </div>
//   );
// }

// export default Nav;
import React, { useDebugValue, useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  //   const [show, handleShow] = useState(false);

  //   useEffect(() => {
  //     window.addEventListener("scroll", () => {
  //       if (window.scrollY > 100) {
  //         handleShow(true);
  //       } else handleShow(false);
  //     });
  //     return () => {
  //       window.removeEventListener("scroll", null);
  //     };
  //   }, []);

  return (
    // <div className={`nav ${show && "nav_black"}`}>
    <div className="nav">
      <img
        className="nav_logo"
        src="https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png"
        alt="Netflix Logo"
      />
      <img
        className="nav_avatar"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpUxlpgcPQ1bjfII_6jJMhilqXL_xQsOMg8WjTXh9K1lg7ho_eo6UfMHdsEMNTz8vmvZw&usqp=CAU"
        alt="Netflix Avatar"
      />
    </div>
  );
}

export default Nav;
