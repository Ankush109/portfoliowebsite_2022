import React from 'react'
import "./Portfolio.css";
function About() {
  return (
<div className="about">
        <div className="right">
          <h1> MERN Stack Ecommerce App </h1>
          <br/>
          <br/>
          <a href="https://adat.herokuapp.com/" ><button className="m">Click here to view this project online</button></a>
          <br/>
          <br/>
          <span>This is a full stack project,the frontend part is made with the help of React js and the backend is made with node js and for database  i have used mongodb database for its simple to use and configure and as for state management i have used react-redux.
        
        <br/>
       
        <br/>
        
      

        </span>
        <span>
            If you want to know the details ,here is my github repo link where i
            have explained every functionality of this applicaiton in details
            with images.
            <br />
            <a href="https://github.com/Ankush109/ADAT_FINAL_APP">
              <button className="github">For more details</button>
            </a>
          </span>
        </div>
       
      </div>
  )
}

export default About