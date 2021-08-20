import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import './equipments.css'
let v=1;

  let init=1;
const Products = () => {

const [s1,st1]=useState(init);
const [s2,st2]=useState(0);
const [s3,st3]=useState(0);
let s=1;

    function ds(n) {
init=0;

        if(n==1){
st1(1);
st3(0);
            
            st2(0);
        }
        else if(n==2){
            st3(0);
            st1(0);
            st2(1);
        }
        else{
            st3(1);
            st1(0);
            st2(0);
        }


        
      }
    
  return (
    <div className="milestone" id="equipment">
      <h1>Farming equipments</h1>

      <div className="mbox fade" style={{display:s1?'flex':'none'}}>
        <img src="https://s3.amazonaws.com/newhobbyfarms.com/2020/01/14-seed-drills-david-wright-flickr-e-800x462.jpg"></img>

        <div className="boxxxx">
          {" "}
          <h2>HARVESTING MACHINE</h2>
          <p>
          Happy harvesting begins with careful sowing.
          </p>
        </div>
      </div>
      <div className="mbox fade" style={{display:s2?'flex':'none'}}>
        <img src="https://s3.amazonaws.com/newhobbyfarms.com/2020/01/7-cultivator-AgriLife-Today-flickr-e-800x462.jpg"></img>

        <div className="boxxxx">
          {" "}
          <h2>TRACTOR </h2>
          <p>
          The most common use of the term "tractor" is for the vehicles used on farms. 
          </p>
        </div>
      </div>
      <div className="mbox fade" style={{display:s3 ?'flex':'none'}}>
        <img src="https://s3.amazonaws.com/newhobbyfarms.com/2020/01/22-combine-harvester-david-wright-flickr-e.jpg"></img>

        <div className="boxxxx">
          {" "}
          <h2>HARVESTING MACHINE </h2>
          <p>
          Happy harvesting begins with careful sowing.
          </p>
        </div>
      </div>

      <div class="slid">
        <div className={`linee ${s1&& "active"} `} onClick={()=>{ds(1)}}></div>
        <div className={`linee ${s2&& "active"}`} onClick={()=>{ds(2)}}></div>
        <div className={`linee ${s3 && "active"}`} onClick={()=>{ds(3)}}></div>
        
      </div>
      
    </div>
  );
};
export default Products;
