import React, { Fragment } from "react";
import { render } from "react-dom";

import ReactSimpleCarousel from "react-plain-carousel";

class AutoRotatingCarousel extends React.Component {
  state = {
    carousel: {},
    index: 0
  };

  next = () => {
    this.state.carousel.next();
  };

  prev = () => {
    this.state.carousel.prev();
  };

  moveTo = index => () => {
    this.state.carousel.moveTo(index);
  };

  handleMount = carousel => {
    this.setState({ carousel });
  };

  handleTransitionEnd = ({ index }) => {
    this.setState({ index });
  };

  render() {
    return (
      <Fragment>
        <Fragment>
          <ReactSimpleCarousel isInfinity autoplay className="carousel">
            <div> 
              <img src={"https://i.ibb.co/g43Yk5W/1.png"}
                  aria-label="Welcome to Digital Library"/>
            </div>
            <div >
              <img src={"https://i.ibb.co/ryF9J29/2.png"}
                    aria-label="Play Pause and Listen to your Favourites"/>
            </div>
            <div >
              <img src={"https://i.ibb.co/9G9xPyP/3.png"}
                    aria-label="Sign In to read and Listen to your books"/>
            </div>
          </ReactSimpleCarousel>
        </Fragment>

        
        
      </Fragment>
    );
  }
}
export default AutoRotatingCarousel;
