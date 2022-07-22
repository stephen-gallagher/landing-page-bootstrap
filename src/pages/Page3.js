import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Page3() {
  const navigate = useNavigate();

  return (
    <div>
      <img
        className="w-100"
        style={{ height: '95vh' }}
        src="/Carousel-Images/landscape-3.jpg"
        alt="landscape of blue coloured mountain ranges with sunrise colours in background"
      ></img>
      <div
        className="d-flex flex-column align-items-center"
        style={{ position: 'absolute', top: '40%', left: '45%' }}
      >
        <h2
          className="text-white bold"
          style={{ textShadow: '2px 2px #000000' }}
        >
          Page 3
        </h2>

        <button className="btn btn-success mt-2" onClick={() => navigate('/')}>
          Back to home
        </button>
      </div>
    </div>
  );
}
