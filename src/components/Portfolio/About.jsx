import React from 'react'
import "./Portfolio.css";
function About() {
  return (
<div className="about">
        <div className="right">
          <h1> Details </h1>
          <br/>
          <br/>
          <a href="https://adat.herokuapp.com/" ><button className="m">Click here to view this project online</button></a>
          <br/>
          <br/>
          <span>This is a full stack project,the frontend part is made with the help of React js and the backend is made with node js and for database  i have used mongodb database for its simple to use and configure.
        I have used React Redux and understand the depth of its use and from now on i will use Context Api in all of my future Projects for its simplier than Redux
        <br/>
        <h1 className='o'>About the project </h1>
        <br/>
        
        In this project the functionality are as 
        A person visiting the website can see the home page where there is a navbar at the top where the users can login or register if they are a new user once some one have register they dont have to register after that as it will be in the cookies in their local storage  and featured products below which will show first 10 products in the data base rest of all the products will be in the route products which we can go by clicking the above link show all products
        In the products page one can see the products listed all together , by clicking one of them will redirect to their respective pages and can add to cart or write a review or rate the product.After add to cart on can go to their cart section and see the products they haved add they can remove the product or increase the quanity 
        after that one can click on Continue to payment to pay them (payment method is not integrated will do that later on),after paying order will be placed one can see what they have ordered in the orders section .
        There is a special feature of admin only those made admin can access a special feature called dashboard where they can see everthing happening the number of users register to the site their orders their products they can add product and even see and delete reviews by passing the products id in the review box

        </span>
        </div>
        <div className="left">
          <h1>ADAT</h1>
          <h2>
           ( Full Stack Eccommerce Web application )
          </h2>
          
        </div>
      </div>
  )
}

export default About