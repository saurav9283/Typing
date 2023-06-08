import React from "react";
import './Loading.css';
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="loading">
        <Link to='/typing'>
        <button className="typing_btn">Typing Speed Game</button>
        </Link>
    </div>
  );
}