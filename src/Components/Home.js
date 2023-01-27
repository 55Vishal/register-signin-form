import React from "react";

function Home() {
  return (
    <div className="container">
      <section className="d-flex justify-content-between">
        <div className="container mt-3">
          <div className="left_data p-3" style={{width:'100%'}}>
            <h3 className="text-center col-lg-6">Sign Up</h3>

            <form>
              <div class="mb-3 col-lg-6">
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputName"
                  placeholder="Enter Your Name"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3 col-lg-6">
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  placeholder="Enter Email address"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3 col-lg-6">
                <input type="date" class="form-control" />
              </div>
              <div class="mb-3 col-lg-6">
                <input
                  type="password"
                  placeholder="Enter password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>

              <button type="submit" class="btn btn-success col-lg-6">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="right_data mt-5" style={{width:'100%'}}>
            <div className="sign_img mt-5">
              <img
                src="https://images.unsplash.com/photo-1529539795054-3c162aab037a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bG9naW58ZW58MHx8MHx8&w=1000&q=80"
                style={{ maxWidth: 480 }}
              />
            </div>
          </div>
      </section>
    </div>
  );
}

export default Home;
