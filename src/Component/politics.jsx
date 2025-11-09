import React from "react"
import videoSample from "./videosample.mp4"

function Politics(){
    return(
      <>
      <div className="bg-info">
        <div className="container ">
        <div className="row pt-2"><h3 style={{borderLeft: "2px solid"}}>&nbsp;Newyork News</h3></div>
              <div className="row">
                <div className="col-md-6">
              <video loop muted controls width='100%' height='100%'>
                <source src={videoSample} type="video/mp4"/>
              </video>
            </div>  
            <div className="col-md-6 py-5 bg-success" style={{borderRadius:"15%"}} >
              <h5>When John Boyega gave an impassioned speech at a Black Lives Matter rally in June 2020, he worried it would ruin his career in movies.
        "Black lives have always mattered. We have always been important. We have always meant something," he said.</h5>
        </div>   
        </div>
        <br/>
          </div>
          </div>
        
          </>
          )
          }
   export default Politics;