import React from "react";
function News(){

    return (
      <>
    <div style={{backgroundColor:"salmon"}}>

    <div className="container pt-2">
      <div className="row">
        <h3 style={{borderLeft: "2px solid"}}> &nbsp;News</h3>
      </div>
      <div className="row">
        <div className="col-md-4 col-sm-6 col-lg-3">
          <div className="card mt-2" style={{width: "100%"}}>
            <div className="card-body">
              <img
                src={require("./Images/cardimage2.jpg")}
                height="100%"
                width="100%"
                alt="news1"
                
              />
            </div>
            <div className="card-footer" style={{height:"190px"}}>
              The US believes a suspected Chinese surveillance balloon that was
              shot down over its territory is part of a wider fleet that has
              spanned five continents.
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 col-lg-3">
          <div className="card mt-2" style={{width: "100%"}}>
            <div className="card-body">
              <img
                src={require("./Images/cardimage1.jpg")}
                height="100%"
                width="100%"
                alt="news1"
              />
            </div>
            <div className="card-footer" style={{height:"190px"}}>
              Some Twitter users were unable to tweet on Wednesday after the
              website experienced technical problems. 
              
            </div>
            
          </div>
        </div>
        <div className="col-md-4 col-sm-6 col-lg-3">
          <div className="card mt-2" style={{width: "100%"}}>
            <div className="card-body">
              <img
                src={require("./Images/cardimage3.jpg")}
                height="100%"
                width="100%"
                alt="news1"
              />
            </div>
            <div className="card-footer" style={{height:"190px"}}>
              North Korea has shown its largest display of inter continental
              ballistic missiles (ICBMs), a number analysts say potentially challenge the US' defence system.
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 col-lg-3">
          <div className="card mt-2" style={{width:"100%"}}>
            <div className="card-body">
              <img
                src={require("./Images/cardimage4.jpg")}
                height="100%"
                width="100%"
                alt="news1"
              />
            </div>
            <div className="card-footer" style={{height:"190px"}}>
              A 16th-Century epic poem based on the life of popular Hindu god
              Ram is at the centre of a huge political row in India.
            </div>
           
          </div>
        </div>
      </div>
      <br/>
    </div>
    </div>
    </>
  )

}
export default News;