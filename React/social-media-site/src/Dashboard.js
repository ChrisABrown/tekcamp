import React from "react";
import ApprovalCard from "./ApprovalCard";
import { faker } from "@faker-js/faker";
import Comment from "./Comments";
import Avatar from "./Avatar";

const Dashboard = (props) => {
  return (
    <div>
      <Avatar />
      <div className="ui container comments">
        <ApprovalCard>
          <h4>Warning!</h4> Are you sure you want to do this?
        </ApprovalCard>
        <ApprovalCard>
          <Comment
            author="Billy"
            timeAgo="2 hours ago"
            imgSrc={faker.image.avatar()}
            text="Such a cool idea!"
          />
        </ApprovalCard>
        <ApprovalCard>
          <Comment
            author="Mike"
            timeAgo="2 days ago"
            imgSrc={faker.image.avatar()}
            text="Nice!"
          />
        </ApprovalCard>
        <ApprovalCard>
          <Comment
            author="Rebecca"
            timeAgo="4 hours ago"
            imgSrc={faker.image.avatar()}
            text="I would have never thought of that"
          />
        </ApprovalCard>
      </div>
    </div>
  );
};

export default Dashboard;
