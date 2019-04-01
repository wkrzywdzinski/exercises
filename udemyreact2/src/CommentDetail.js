import React from "react";
import faker from "faker";

const CommentDetail = () => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={faker.image.avatar()} />
      </a>
      <div className="content">
        <a href="/" className="author">
          WOYTI
        </a>
        <div className="metadata">
          <span className="date"> TODAY 16:32</span>
        </div>
        <div className="text">NICE ONE BRUVA</div>
      </div>
    </div>
  );
};

export default CommentDetail;
