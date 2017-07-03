import React from 'react';
import CommentsEntry from './CommentsEntry.jsx';

const CommentsList = ({ comments }) => {
  return (
    <div className="comments-list">
      {
        comments.slice(0).reverse().map(comment => {
          return <CommentsEntry key={comment.id} comment={comment} />;
        })
      }
    </div>
  );
};

export default CommentsList;
