import React from "react";


class CompanyComponent extends React.Component {  
  render() {
    return (
      <section className="content">
        <div className="container-fluid">
            <div className="block-header">
                <h2>MANAGE COMPANY</h2>
            </div>   
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="card">
                        <div className="header">
                            <h2>
                                Add Company
                            </h2>                           
                        </div>
                        <div className="body">
                            <form>
                                <label htmlFor="email_address">Name</label>
                                <div className="form-group">
                                    <div className="form-line">
                                        <input type="text" id="email_address" className="form-control" placeholder="Enter your email address"/>
                                    </div>
                                </div>                              
                                <br />
                                <button type="button" className="btn btn-primary m-t-15 waves-effect">Add Company</button>
                            </form>
                        </div>
                    </div>
                </div>
        </div>
    </section>
    );
  }
}

export default CompanyComponent;