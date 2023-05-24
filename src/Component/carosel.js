import React from "react";

function Carosel(){
    return(
    <>
    <div style={{backgroundColor:"beige"}}>
    <div className="container pt-4 ">
<div id="carouselExampleCaptions" className="carousel slide " data-bs-ride="carousel ">
  <div className="carousel-indicators"> 
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>

  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={require("./Images/bbc news 1.jpg")} className="d-block w-100" alt="bbcNews1"/>
      <div className="carousel-caption caption">
              <h3 style={{color: "darkblue"}}>
                India government criticises BBC's Modi documentary
              </h3>
            </div>
    </div>
    <div className="carousel-item">
      <img src={require("./Images/bbc news 2.jpg")} className="d-block w-100" alt="bbcNews2"/>
      <div className="carousel-caption caption">
              <h3 style={{color: "aliceblue"}}>
                Estimates show India's population may've already overtaken
                China's population.
              </h3>
            </div>
    </div>
    <div className="carousel-item">
      <img src={require("./Images/bbc news 3.jpg")} className="d-block w-100" alt="bbcNews3"/>
      <div className="carousel-caption caption">
              <h3 style={{color: "white"}}>
                Tax relief and spending boost in India budget
              </h3>
            </div>
    </div>
    <div className="carousel-item">
      <img src={require("./Images/bbc news 4.jpg")} className="d-block w-100" alt="bbcNews4"/>
      <div className="carousel-caption caption">
              <h3 style={{color: "antiquewhite"}}>
                Shubman Gill becomes India's highest individual scorer in T20Is
                with 126* against New Zealand
              </h3>
            </div>
    </div>

  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
<br/>
</div>
    </>
    )
}
export default Carosel;