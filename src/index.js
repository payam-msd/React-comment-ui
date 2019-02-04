import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="chandler" content="what can i do?" />
      <CommentDetail author="joey" content="what it is?" />
      <CommentDetail author="monika" content="i know!!" />
      <CommentDetail author="reachel" content="we were on the break!" />
      <CommentDetail author="ross" content="i like dinosaurs" />
    </div>
  );
};
ReactDOM.render(<App />, document.querySelector('#root'));
