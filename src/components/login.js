import React from 'react';
import { Link } from 'react-router-dom';
import './css/login.css';
import { Formik, Form, Field, ErrorMessage } from "formik";

class  LogIn extends React.Component {

  initialValues() {
    return {
      email: "",
      password: ""
    }
  }

  validate(values) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    let errors = {};

    if (values.email === "") {
      errors.email = "Email is missing";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "Email is not in the expected email address standard format";
    }
    if (values.password === "") {
      errors.password = "Password is missing";
    } else if (values.password.length < 6) {
      errors.password = "Password must be 6 characters at minimum";
    }
    return errors;    
  }


  render(){
  return (
    <div className="container-fluid">
       <section className="row justify-content-center">
        <section className="col-10 col-sm-6 col-md-3">
            <form className="form-container">
                <h3 className="title text-center">Sign In</h3>
                <Formik
                initialValues={this.initialValues()}
                validate={this.validate.bind(this)}> 
                {
                  props => (
                    <Form>
                <div className="form-group">
                   
                    <Field
                          type="email"
                          name="email"
                          placeholder="Enter email"
                          className={`form-control ${props.errors.email ? "is-invalid" : ""}`}
                        />
                        <ErrorMessage
                          component="div"
                          name="email"
                          className="invalid-feedback"
                        />
                </div>
                <div className="form-group">
                    <Field
                          type="password"
                          name="password"
                          placeholder="Enter password"
                          className={`form-control ${props.errors.password ? "is-invalid" : ""}`}
                        />
                        <ErrorMessage
                          component="div"
                          name="password"
                          className="invalid-feedback"
                        />
                </div>
                <div >
                <Link to="/forgot">Forgot Password?</Link> <Link className="signuplink" to='/signup'>Register here</Link> 
                
                </div>
                    <button type="submit" to="/dashboard" className="btn btn-primary login">Log In</button>
                    
                    </Form>
                  )
                }
            </Formik>
            </form>
        </section>
      </section>
    </div>
  );
}
}

export default LogIn;

