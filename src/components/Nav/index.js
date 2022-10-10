import React from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";


function Nav() {
  const  categories = [
        { name: 'runbuddy', description: ' module 1 projects' },
        { name: 'bio', description: 'Web Bio' },
        { name: 'robots', description: 'Game' },
        { name: 'pwdgenerator', description: 'Random password generator' }
      ];
    
  const handleClick = (item) => {
        console.log(item);
        return item;
      };

      function categorySelected() {
        console.log("hello")
      }
      

  return (

    <header className="flex-row px-1">
    <h2>
      <a data-testid="link" href="/">
        <span role="img" aria-label="camera"> 📸</span> Testing!
      </a>
    </h2>
    <nav>
      <ul className="flex-row">
        <li className="mx-2">
          <a data-testid="header" href="#header" onClick={() => handleClick("Header")}>
            About
          </a>
         
        </li>
        
       
        <li className="mx-2">
          <a data-testid="project" href="#project" onClick={() => handleClick("Project")}>
            Projects
          </a>
        </li>


        <li className={"mx-2"}>
          <span onClick={() => handleClick('Contact')}>
            Contact
          </span>
        </li>
        {
          categories.map((category) => (
            <li className="mx-1" key={category.name} >
                <span onClick={categorySelected} >
               {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))
        }
      </ul>
    </nav>
  </header>
);
}


export default Nav;






