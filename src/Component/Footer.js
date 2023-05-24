import React from "react";
function Footer(){
    return(
        <>
    <div className="container-fluid  bg-dark" style={{color:"aliceblue"}}>
    <div className="row ">
      <div className="col-md-3 bord mt-2" >Terms and Condition</div>
      <div className="col-md-3 bord mt-2">Policies</div>
      <div className="col-md-3 bord mt-2">about us</div>
      <div className="col-md-3 bord mt-2">contact us</div>
    </div>
    <hr style={{backgroundColor:" white"}}/>
      <p >Copyright © 2023 BBC 1. The BBC is not responsible for the content of external sites. Read about our approach to external linking.
      </p>
    </div>
    </>
    )
}
export default Footer;