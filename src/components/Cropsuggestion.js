import React from 'react';
import "../Styles/practice-css.css";

function Cropsuggestion(){
    return(
        <>
        <div className='bc'>
        <div className="container">
          <div className="row">
            <h3>
              <strong>Based On Various Soil Types</strong>
            </h3>
          </div>
          <div className="row">
            <div className="col-lg-6 d-flex justify-content-center">
              <div className="card">
                <div className="card-body text-center">
                  <div className="card-img pt-2 pb-3"> <img src={require("./img/image1.png")} alt="" /> </div>
                  <div className="name h5">Alluvial Soil</div>
                  <div className="testimonial"> 
                    <ul>
                      <li>Tobacco</li>
                      <li>Cotton</li>
                      <li>Rice</li>
                      <li>Wheat</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-flex justify-content-center">
              <div className="card">
                <div className="card-body text-center">
                  <div className="card-img pt-2 pb-3"> <img src={require("./img/image1.png")} alt="" /> </div>
                  <div className="name h5">Black Soil</div>
                  <div className="testimonial">
                    <div className="testimonial"> 
                      <ul>
                        <li>Jowar</li>
                        <li>Linseed</li>
                        <li>Sunflower</li>
                        <li>Groundnut</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 d-flex justify-content-center">
              <div className="card">
                <div className="card-body text-center">
                  <div className="card-img pt-2 pb-3"> <img src={require("./img/image1.png")} alt="" /> </div>
                  <div className="name h5">Red And Yellow Soil</div>
                  <div className="testimonial">
                    <div className="testimonial"> 
                      <ul>
                        <li>Rice</li>
                        <li>Corn</li>
                        <li>Ragi</li>
                        <li>Potato</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-flex justify-content-center">
              <div className="card">
                <div className="card-body text-center">
                  <div className="card-img pt-2 pb-3"> <img src={require("./img/image1.png")} alt="" /> </div>
                  <div className="name h5">Laterite Soil</div>
                  <div className="testimonial">
                    <div className="testimonial"> 
                      <ul>
                        <li>Cashews</li>
                        <li>Rubber</li>
                        <li>Coffee</li>
                        <li>Wheat</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr text-align="center" />
        <br /><br />
        <div className="container">
          <div className="row">
            <h3>
              <strong>Bases On Landform</strong>
            </h3>
          </div>
          <div className="row">
            <div className="col-lg-6 d-flex justify-content-center">
              <div className="card">
                <div className="card-body text-center">
                  <div className="card-img pt-2 pb-3"> <img src={require("./img/image1.png")} alt="" /> </div>
                  <div className="name h5">Mountains</div>
                  <div className="testimonial">
                    <ul>
                      <li>Cabbages</li>
                      <li>Beets</li>
                      <li>beans</li>
                      <li>Broccoli</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-flex justify-content-center">
              <div className="card">
                <div className="card-body text-center">
                  <div className="card-img pt-2 pb-3"> <img src={require("./img/image1.png")} alt="" /> </div>
                  <div className="name h5">Desert</div>
                  <div className="testimonial">
                    <ul>
                      <li>Bajra</li>
                      <li>Wheat</li>
                      <li>Water Melons</li>
                      <li>Broccoli</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 d-flex justify-content-center">
              <div className="card">
                <div className="card-body text-center">
                  <div className="card-img pt-2 pb-3"> <img src={require("./img/image1.png")} alt="" /> </div>
                  <div className="name h5">Plains
                  </div>
                  <div className="testimonial">
                    <ul>
                      <li>Bajra</li>
                      <li>Wheat</li>
                      <li>Water Melons</li>
                      <li>Broccoli</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-flex justify-content-center">
              <div className="card">
                <div className="card-body text-center">
                  <div className="card-img pt-2 pb-3"> <img src={require("./img/image1.png")} alt="" /> </div>
                  <div className="name h5">Coastal Areas</div>
                  <div className="testimonial">
                    <ul>
                      <li>Bajra</li>
                      <li>Wheat</li>
                      <li>Water Melons</li>
                      <li>Broccoli</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}

export default Cropsuggestion;