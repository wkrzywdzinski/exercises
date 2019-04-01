import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <h4>ARE YOU SURE?</h4>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Wojti"
          timeAgo="1 day ago"
          comment="Nice"
          picture={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="2 days ago"
          comment="Geil"
          picture={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Maria"
          timeAgo="3 days ago"
          comment="great"
          picture={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};
ReactDOM.render(<App />, document.querySelector("#root"));
