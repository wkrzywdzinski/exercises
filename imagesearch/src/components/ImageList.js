import React, { Component } from "react";
import "./ImageList.css";

class ImageList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // componentDidUpdate() {

  // }
  render() {
    const images = this.props.images.map(image => {
      return (
        <img
          key={image.id}
          src={image.urls.regular}
          alt={image.alt_description}
        />
      );
    });
    return <div className="imagelist">{images}</div>;
  }
}

export default ImageList;
