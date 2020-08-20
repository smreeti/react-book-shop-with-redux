import React, {Component} from "react";

const dummy = "https://static.thenounproject.com/png/625182-200.png";

class ImageUpload extends Component {

    state = {
        current: ''
    };

    uploadImage = (event) => {

        this.setState({
            current: URL.createObjectURL(event.target.files[0])
        })
    };

    render() {
        return (
            <div className="App">

                <input type="file" onChange={this.uploadImage}/>
                <hr/>
                <div className="App">
                    <div>
                        <h3>Current</h3>
                        <img
                            src={this.state.current ? this.state.current : dummy}
                            alt="custom-pic"
                            style={{height: 100, width: 100}}
                        />
                    </div>
                    <hr/>

                    <input type="file" onChange={this.uploadImage}/>
                </div>
            </div>
        )
    }
}

export default ImageUpload