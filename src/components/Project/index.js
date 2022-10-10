import React from 'react';
// import coverImage from "../../assets/cover/cover-image.jpeg";
import photo from '../../assets/small/commercial/0.jpg';


function Project() {

  return (

    <section className="my-5">
  <h1 id="project">Projects?</h1>
  <img src={photo} className="my-2" style={{ width: "70%" }} alt="commercial" />
  {/* <img src={photo} className="my-2" style={{ width: "70%" }} alt="small" /> */}

  <div className="my-2">
        <p>
        Testing  for all projects 
        </p>
        </div>
     </section>
 
  );

}

export default Project;



// import React from 'react'
// import { capitalizeFirstLetter } from '../../utils/helpers';
// import photo from '../../assets/small/commercial/0.jpg';


// function Project(props) {
//     const currentCategory = {
//         name: "sample",
//         description:
//           "sample projects",
//       };
      
    
//        return (

//       <section>
//       <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
//       <img src={photo} className="my-2" style={{ width: "100%" }} alt="small" />
//       <p>{currentCategory.name}</p>
//       <div className="flex-row">
//           <img
//             src={photo}
//             alt="Commercial Example"
//             className="img-thumbnail mx-1"
//           />
//       </div>

//     </section>
//   );
// }

// export default Project;