import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { LinkedinShareButton } from "react-share";
function Footer() {
  return (
    <>
      <div className="container-fluid  bg-dark" style={{ color: "aliceblue" }}>
        <div className="row">
          <div className="col-md-3 bord mt-2">Terms and Condition</div>
          <div className="col-md-3 bord mt-2">Policies</div>
          <div className="col-md-3 bord mt-2">about us</div>
          <div className="col-md-3 bord mt-2">contact us</div>
        </div>
        <div className="row mt-2 shareIcons">
        <LinkedinShareButton
          url={"https://www.youtube.com/watch?v=_vUd_ex6wBw"}
          title="How to use react-share package to implement sharing features"
          htmlTitle="How to use react-share package to implement sharing features"
        >
          <FontAwesomeIcon size="2x" icon={faLinkedin} />
        </LinkedinShareButton>
        </div>
        <hr style={{ backgroundColor: " white" }} />
        <p>
          Copyright © 2023 BBC 1. The BBC is not responsible for the content of
          external sites. Read about our approach to external linking.
        </p>
      </div>
    </>
  );
}
export default Footer;
