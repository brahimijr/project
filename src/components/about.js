import React from 'react';
import Navbar from './navbar';
import './css/about.css';
function About(){

    return(

       <div>
           <Navbar/>
        <div className="about container-fluid">
            <div className="row">
                <div className="col-md-10 col-sm-12">
            <h3 className="text-center">About us</h3>
            <p>
                lorem Feedback from our readers is always welcome. Let us know what you think about
                this book—what you liked or disliked. Reader feedback is important for us as it helps
                us develop titles that you will really get the most out of.
                To send us general feedback, simply e-mail feedback@packtpub.com, and mention
                the book's title in the subject of your message.
                If there is a topic that you have expertise in and you are interested in either writing
                or contributing to a book, see our author guide at www.packtpub.com/authors.
            </p>
            </div>
        </div>
        </div>
       </div>
    );
}

export default About;