import React from 'react';
import Navbarhome from './Navbar';
import "../Styles/donation.css";
function Donation(){
    return(
        <>
        <Navbarhome/>
        <div className="a">
        <div className="container mt-5 mb-5">
          <form action="submit-donation.php" method="post">
            <div className="form-title">Make a Donation</div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" required />
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" placeholder="Enter your email" required />
            <label htmlFor="amount">Amount</label>
            <select id="amount" name="amount" required>
              <option value>Select an amount</option>
              <option value={10}>$10</option>
              <option value={25}>$25</option>
              <option value={50}>$50</option>
              <option value={100}>$100</option>
            </select>
            <input type="submit" defaultValue="Submit" />
            <div className="form-message">We appreciate your contribution.</div>
          </form>
        </div>
      </div>
         
        </>
    )
}

export default Donation;