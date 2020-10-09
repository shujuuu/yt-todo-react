import React from "react";

class ImageSlider extends React.Component {

    //store all images
    state = {
        image: ["https://media.giphy.com/media/5qG15kb1sU95yptJvd/giphy.gif",
            "https://media.giphy.com/media/QUS0TkYhzJM5kfIkgi/giphy.gif",
            "https://media.giphy.com/media/hR0CeUNrgEJ7rudhBe/giphy.gif",
            "https://media.giphy.com/media/VJfz36k1TioPTbqpeh/giphy.gif"
        ],
        index: 0
    };

    //handle next function
    handleNext = () => {

        console.log(this.state);
        //setState is asynchronous
        //has a second value you can pass, callback function
        this.setState({
            index: this.state.index + 1
            // });
        }, () => {
            console.log(this.state);
        });

    }

    //handle prev function
    handlePrev = () => {
        this.setState({
            index: this.state.index - 1
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.handlePrev}>prev</button>
                <img
                    style={{ width: 300, height: 300 }}
                    src={this.state.image[this.state.index]}
                    alt="" />
                <button onClick={this.handleNext}>next</button>
            </div>
        )
    }
}

export default ImageSlider;