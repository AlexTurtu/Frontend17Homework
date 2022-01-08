var addCommentBtn = document.querySelector("#addComment");
var commentID = document.querySelector("#commentID");
var commentEmail = document.querySelector("#emailAddress");
var commentsParagraph = document.querySelector("#commentParagraph");
var comment = document.querySelector("#textBoxComment");
var id = 1000;
class Comments {
  constructor(id, email, message) {
    this.id = id;
    this.message = message;
    this.email = email;
  }
}
const allComments = [];

function createCommnent() {
  id++;
  console.log(id);
  const newComment = new Comments(id, commentEmail.value, comment.value);
  allComments.push = newComment;
  console.log(allComments);
}
