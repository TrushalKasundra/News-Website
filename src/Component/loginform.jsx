import React from "react";
import { Link } from "react-router-dom";

function LoginForm() {
    // const { pending } = useFormStatus();
  return (
    <>
      <div style={{ backgroundColor: "wheat" }}>
        <form action="" name="" id="" method="">
          <div className="container pt-3 ">
            <div className="row ">
              <div className="col-3"></div>
              <div className="col-6 bg-info">
                <h3 style={{ color: "red" }}>Sign In</h3>
                <div>
                  <label htmlFor="name" className="form-label">
                    User id.:-
                  </label>{" "}
                  <br />
                  <input
                    type="text"
                    placeholder="user id."
                    name="User id."
                    id=""
                    className="form-control"
                  />
                </div>
                <div>
                  <label htmlFor="name" className="form-label">
                    Password:-
                  </label>{" "}
                  <br />
                  <input
                    type="text"
                    placeholder="Password"
                    name="Password"
                    id=""
                    className="form-control"
                  />
                </div>
                <div className="mt-1">
                  <button type="submit" className="btn btn-success btn-sm">
                    Login
                  </button>
                  <button type="reset" className="btn btn-success btn-sm m-1">
                    reset
                  </button>
                </div>
                <div className="mx-auto">
                  <label style={{ color: "   black" }}>
                    don't have an account? &nbsp;&nbsp;
                  </label>
                  <Link to="/registrationForm">
                    <button type="button" className="btn btn-outline-dark">
                      Register Now
                    </button>
                  </Link>
                </div>
                <br />
              </div>
            </div>
          </div>
          <br />
        </form>
      </div>
    </>
  );
}
export default LoginForm;
