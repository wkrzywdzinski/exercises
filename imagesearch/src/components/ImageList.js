import React, { Component } from "react";
import "./ImageList.css";
import ImageCard from "./ImageCard";

class ImageList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // componentDidUpdate() {

  // }
  render() {
    const images = this.props.images.map(image => {
      return <ImageCard key={image.id} image={image} />;
    });
    return <div className="imagelist">{images}</div>;
  }
}

export default ImageList;
