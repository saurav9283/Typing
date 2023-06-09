import React from "react";
import './Loading.css';
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <>
    <div className="loading">
        <Link to='/typing'>
        <button className="typing_btn">Typing Speed Game</button>
        </Link>
    </div>
    <div className='submit-tag'>
              <p>Project Created By: Saurav kumar</p>
              <a href='https://github.com/saurav9283' target='_blank' rel="noreferrer">
                <img src="https://cdn-icons-png.flaticon.com/512/3291/3291695.png" width="32" height="32" alt="Github"></img>
              </a>
              <a href='https://www.linkedin.com/in/saurav9283/' target='_blank' rel="noreferrer">
                <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" width="32" height="32" alt="LinkedIn"></img>
              </a>
            </div>
    </>
    
  );
}