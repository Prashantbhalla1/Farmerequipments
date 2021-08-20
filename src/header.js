import { useState } from "react";
import Head1 from "./head1";
import "./Header.css";

const Header = () => {
  const [ch,st]=useState(0);
 const handleclick=()=>{
st(!ch);

 }


  return (
    <>
      <div className="hea">
        <nav className="head" >
          <img onClick={handleclick}
            className="userr"
            src="https://prashantbhalla1.github.io/Education/user1.png"
          ></img>
          
       <ul className="uu">
<li className="new">
    Farming Equipments
</li>

       </ul>
        </nav>

        <nav className={` ${ch?'openn':'head2'}`}>
          <ul className={` ${ch?'openn':'uuuu'}`}>
            <li>
              <a href="#">
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#priced">
                <span>Services</span>
              </a>
            </li>
            <li>
              <a href="#priced">
                <span>Prices</span>
              </a>
            </li>
            <li>
              <a href="#equipment">
                <span>Products</span>
              </a>
            </li>
            <li>
              <a href="#contact">
                <span class="hide-menu">ContactUs</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <Head1/>
    </>
  );
};
export default Header;