import "./price.css";
const Price = () => {
  return (
    <div class="price" id="priced">
      <div class="packagebox">
        <div class="links">
          <ul class="package">
            <li>
                <h3 className="h33">Tractor</h3>
              </li>
          </ul>
        </div>
        <div class="charge">
          <h5>
            {" "}
            Tractor per month rent
          </h5>
          <p>₹ 1500</p>
        </div>
        <div class="chk">
          
          <h5> <i class="far fa-clock theme_color_txt" aria-hidden="true"></i> 3 Days Delivery </h5>
          <h4>What's Included</h4>
          <i
            class="iii fa fa-check tick-col theme_color_txt"
            aria-hidden="true"
          ></i>
          <p>Mahindra</p>
          <i
            class="iii fa fa-check tick-col theme_color_txt"
            aria-hidden="true"
          ></i>
          <p>Gear Box : 8 Forward + 2 Reverse</p>
          <i
            class="iii fa fa-check tick-col theme_color_txt"
            aria-hidden="true"
          ></i>
          <p>Dry Disc Breaks </p>
        </div>
        <button className="button" >Proceed</button>
      
      </div>
      <div class="packagebox">
        <div class="links">
          <ul class="package">
            <li>
                <h3 className="h33">Multi Crop Harvester</h3>
              </li>
          </ul>
        </div>
        <div class="charge">
          <h5>
            {" "}
            Multi Crop Harvester per month rent
          </h5>
          <p> ₹ 2000 </p>
        </div>
        <div class="chk">
          
          <h5><i class="far fa-clock theme_color_txt" aria-hidden="true"></i> 3 Days Delivery </h5>
          <h4>What's Included</h4>
          <i
            class="iii fa fa-check tick-col theme_color_txt"
            aria-hidden="true"
          ></i>
          <p> Start : Motor Starter</p>
          <i
            class="iii fa fa-check tick-col theme_color_txt"
            aria-hidden="true"
          ></i>
          <p>Power : 88/2600</p>
          <i
            class="iii fa fa-check tick-col theme_color_txt"
            aria-hidden="true"
          ></i>
          <p>Crops Sandard : Wheat/Paddy</p>
        </div>
        <button className="button" >Proceed</button>
        
      </div> <div class="packagebox">
        <div class="links">
          <ul class="package">
            <li>
                <h3 className="h33">Irrigation Sprinklers</h3>
              </li>
          </ul>
        </div>
        <div class="charge">
          <h5>
            {" "}
            Irrigation Sprinklers per month rent
          </h5>
          <p>₹ 1600.00 </p>
        </div>
        <div class="chk">
       
          <h5><i class="far fa-clock theme_color_txt" aria-hidden="true"></i> 3 Days Delivery </h5>
          <h4>What's Included</h4>
          <i
            class="iii fa fa-check tick-col theme_color_txt"
            aria-hidden="true"
          ></i>
          <p>360 Degree</p>
          <i
            class="iii fa fa-check tick-col theme_color_txt"
            aria-hidden="true"
          ></i>
          <p>Rotating lawn sprinkler Garden</p>
          <i
            class="iii fa fa-check tick-col theme_color_txt"
            aria-hidden="true"
          ></i>
          <p>Automatic watering irrigation system</p>
        </div>
        <button className="button" >Proceed</button>
      
      </div>
    </div>
  );
};
export default Price;
