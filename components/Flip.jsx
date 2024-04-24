import React from 'react';


const Flip = ({ frontImageSrc, backImageSrc }) => {
  return (
    <div class="flip-card-container">
    <div class="flip-card">
      <div class="flip-card-front">
        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg" alt="Albert Einstein"/>
      </div>
      <div class="flip-card-back">
        <p>
          "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."
          <span>- Albert Einstein -</span>
        </p>
      </div>
    </div>
  </div>
  );
};

export default Flip;



