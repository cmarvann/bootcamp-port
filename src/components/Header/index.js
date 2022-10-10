import React from 'react';
// import coverImage from "../../assets/cover/cover-image.jpeg";
import coverImage from "../../assets/cover/cover-image.jpg";
function Header() {

  return (
    <section className="my-5">
  <h1 id="header"><p> Student Portfolio</p></h1>
  <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />

  <div className="my-2">
        <p>
         Boot Camp portfolio for Rutger Boot Camp
        </p>
        </div>
     </section>
 
  );
}

export default Header;