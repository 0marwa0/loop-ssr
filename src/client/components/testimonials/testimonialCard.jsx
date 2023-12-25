import starIcon from "../../assets/icons/star-icon.svg";
import userImage from "../../assets/images/testimonal-user.png";
import "./index.css";
import React, { useEffect, useState } from "react";
function TestimonalCard(props) {
  // const [scrollDirection, setScrollDirection] = useState("up");
  // const [scrollPosition, setScrollPosition] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentPosition = window.scrollY;

  //     if (currentPosition > scrollPosition) {
  //       setScrollDirection("down");
  //     } else {
  //       setScrollDirection("up");
  //     }

  //     setScrollPosition(currentPosition);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [scrollPosition]);
  return (
    <div className={` ${props.isBlure ? "hide_card" : ""}`}>
      <section
        className={` ${props.scrollDirection} card-move card${props.number}-move card-move  testimonal-card`}
      >
        <div>
          <div class="d-flex align-items-center gap15">
            <img className="testimonal-user-img" src={props.imgUrl} alt="" />
            <div className="d-flex flex-column">
              <div>
                <div className="font-18"> {props.name}</div>
                <div className="testimonal-stars">
                  <img className="star-icon" src={starIcon} alt="" />
                  <img className="star-icon" src={starIcon} alt="" />
                  <img className="star-icon" src={starIcon} alt="" />
                  <img className="star-icon" src={starIcon} alt="" />
                  <img className="star-icon" src={starIcon} alt="" />
                </div>{" "}
              </div>
            </div>
          </div>

          <div>
            <div className="card-text-testimonial">
              Booking with LOOP was the highlight of our celebration! The
              PRINCESS F56 FLY yacht surpassed all expectations. The crew's
              professionalism and meticulous attention to detail made our day
              truly unforgettable.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TestimonalCard;
