import React, { Component } from 'react';

export default class ImageSlider extends Component {
    constructor(){
        super()

        this.state = {
            currentSlideIndex: 0
        }
    }



    render() {
        // console.log(this.props)
        return (
          <div>
            <h1>I am on slide {this.state.currentSlideIndex}</h1>
          </div>
        )
      }

}