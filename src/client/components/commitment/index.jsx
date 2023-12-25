import { useState, useEffect } from "react";
import "./index.css";
import shipIcon from "../../assets/icons/ship-icon.svg";
import compassIcon from "../../assets/icons/compass.svg";
import yachtSidIcon from "../../assets/images/Yacht-booking-section.png";
import BookingUI from "../Booking/BookingUi";
import commitmentSectionBg from "../../assets/images/commitment-area.svg";
function CommitmentSection() {
  const [scrollDirection, setScrollDirection] = useState("up");
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;

      if (currentPosition > scrollPosition) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      setScrollPosition(currentPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);
  return (
    <div>
      <div
        className="popup-booking-bg"
        style={{ backgroundImage: `url(${commitmentSectionBg})` }}
      >
        <BookingUI />{" "}
      </div>
      <div
        className="commitment-section"
        style={{ backgroundImage: `url(${commitmentSectionBg})` }}
      >
        {/* compass */}
        <div className="compass-container">
          <img
            src={compassIcon}
            className={`image-container compass-icon compass ${scrollDirection}`}
          />
        </div>
        {/* text */}
        <div className="commitment-container ">
          <img src={shipIcon} className="ship-icon" />
          <div>
            <div className="commitment-title">OUR COMMITMENT.....</div>
            <div>
              Our commitment is to provide you with a
              <span className="font-wight-500"> yacht experience</span> that
              transcends the ordinary.
            </div>
          </div>
        </div>
        {/* Yacht */}
        <div className={`image-container yacht-side-icon ${scrollDirection}`}>
          <div className="Yacht-space"> </div>
          <img src={yachtSidIcon} />
        </div>
      </div>
    </div>
  );
}

export default CommitmentSection;
