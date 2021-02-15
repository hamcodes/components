import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail 
          author="Sam" 
          timeAgo="Today at 4:45pm" 
          content="Good job" 
          avatar={faker.image.cats()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          author ="Alex" 
          timeAgo="Today at 2:00am" 
          content="nice" 
          avatar={faker.image.animals()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          author="Jane" 
          timeAgo="Yesterday at 5:00pm" 
          content="hello there" 
          avatar={faker.image.sports()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'))