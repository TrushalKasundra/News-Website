import React from 'react';

function RegiForm(){
    return(
        <>  
        <div style={{backgroundColor:"wheat"}}>
         <form action ="" name="" id="" method="" className="">
               <div className="container pt-3 ">
                <div className="row ">
                <div className="col-3"></div>
                    <div className="col-6 bg-info">
                    <h3 style={{color:"red"}}>Registarion Form</h3>

                <div>
          <label htmlFor="name" className="form-label">Name:-</label> <br/>
           <input type="text"
           placeholder="Enter your full name"
           name="name"
           id="name" className="form-control" />
       </div>
               <div>
                  <label htmlFor="dob1" className="form-label"> Date of Birth:-</label> <br/>
                   <input type="date"
                   placeholder="Enter your dob"
                   name="Date of Birth"
                   id="dob" className="form-control" />
                </div>
           <div>
              <label htmlFor="email"className="form-label"> email id.:-</label> <br/>
               <input type="email" placeholder="Enter your Email id" id="email" className="form-control" />
           </div>
            <div>
          <label type="number" className="form-label">Mobile Number:-</label>  <br/>
           <input type="number"
           placeholder="Enter your Mobile Number"
           name="Mobile Number"
           id="number" className="form-control" />
            </div>
       <div>
              <label htmlFor="address" className="form-label">Address:-</label> <br/>
               <textarea palceholder="Address" id="address" className="form-control" rows="4"></textarea>
        </div>
        <div>
          <label htmlFor="gender" className="form-label">Gender:-</label> <br/>
           MALE<input type="radio" name="gender" id="gender"className="form-check-input" value="M"/>
           FEMALE<input type="radio" name="gender" id="gender"className="form-check-input" value="F"/>
        </div>
        <div>
          <label htmlFor="language" className="form-label">language:-</label> <br/>
              gujarati <input type="checkbox" name="language" id="language" className="form-check-input" value="G"/>
              hindi <input type="checkbox" name="language" id="language" className="form-check-input" value="H"/>
              english<input type="checkbox" name="language" id="language" className="form-check-input" value="E"/>
        </div>
        <div>
          <label htmlFor="bgroup"className="form-label">Blood Group:-</label> <br/>
           <select id="bgroup" className="form-" name="" >
               <option value="A+">A+</option>
               <option value="A-">A-</option>
               <option value="B+">B+</option>
               <option value="B-">B-</option>
               <option value="o+">o+</option>
               <option value="o-">O-</option>
            </select>
        </div>
        <div>
          <label htmlFor="photo"className="form-label">Photo:-</label> <br/>
           <input type="file" name="image" id="photo" className="form-control" />
        </div>
       
        <div>
          
               <label htmlFor="userid" className="form-label">User id.:-</label> <br/>
              <input type="text"
                  placeholder="user id."
                  name="User id."
                  id="userid"
                  className="form-control"
                  />
              
              </div>
          <div>
             <label htmlFor="pass" className="form-label">Password:-</label> <br/>
              <input type="text"
              placeholder="Password"
              name="Password"
              id="pass"
              className="form-control"
           />
   
          </div>
          <div className="mt-1">
              <button type="submit" className="btn btn-success  ">Save</button>
              <button type="reset" className="btn btn-success m-1">reset</button>
              
          </div>
          </div>
          </div>
          </div>
          <br/>
           </form> 
           </div>
           </>

    )
}
export default RegiForm;