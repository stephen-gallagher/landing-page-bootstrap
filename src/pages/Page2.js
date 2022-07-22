import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Page2() {
  const navigate = useNavigate();

  return (
    <div>
      <img
        className="w-100"
        style={{ height: '95vh' }}
        src="/Carousel-Images/landscape-2.jpg"
        alt="big lake landscape during a purple toned sunset with tree in foreground and mountains in background"
      ></img>
      <div
        className="d-flex flex-column align-items-center"
        style={{ position: 'absolute', top: '40%', left: '45%' }}
      >
        <h2
          className="text-white bold"
          style={{ textShadow: '2px 2px #000000' }}
        >
          Page 2
        </h2>

        <button className="btn btn-success mt-2" onClick={() => navigate('/')}>
          Back to home
        </button>
      </div>
    </div>
  );
}
