import React from 'react';


const Flip = ({ frontImageSrc, backImageSrc }) => {
    return (
        <div class="flip-card-container">
            <div class="flip-card">
                <div class="flip-card-front">
                    <img
                        src="/grid/item-1.avif"
                        alt="Albert Einstein"
                    />
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



