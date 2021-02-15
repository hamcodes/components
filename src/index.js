import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail 
        author="Sam" 
        timeAgo="Today at 4:45pm" 
        content="Good job" 
        image={faker.image.cats()}
        />
      <CommentDetail 
        author ="Alex" 
        timeAgo="Today at 2:00am" 
        content="nice" 
        image={faker.image.animals()}
        />
      <CommentDetail 
        author="Jane" 
        timeAgo="Yesterday at 5:00pm" 
        content="hello there" 
        image={faker.image.sports()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'))