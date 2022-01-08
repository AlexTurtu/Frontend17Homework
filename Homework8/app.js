var addCommentBtn = document.querySelector("#addComment");
var commentID = document.querySelector("#commentID");
var commentEmail = document.querySelector("#emailAddress");
var commentsShow = document.querySelector(".commentsShow");
var comment = document.querySelector("#textBoxComment");
var id = 1000;
var divCommClass = document.querySelectorAll(".divCommClass");
class Comments {
  constructor(id, email, message) {
    this.id = id;
    this.message = message;
    this.email = email;
  }
}
const allComments = [];

function createCommnent() {
  const newComment = new Comments(id, commentEmail.value, comment.value);
  var divComm = document.createElement("div");
  var commClose = document.createElement("div");
  //create the comment box
  commentsShow.appendChild(divComm);
  divComm.id = id;
  divComm.className = "divCommClass";
  divComm.innerHTML = `<p class="commentBody">${comment.value} </p> </br> <p class="commentEmail">From: ${commentEmail.value}</p>`;
  // create the close comment div
  commClose.id = "ID" + id;
  commClose.className = "commentCloseClass";
  commClose.innerHTML = `<p onclick="deleteComment(${id})">Delete comment with id: #ID${id}...</p>`;
  divComm.appendChild(commClose);
  allComments.push(newComment);
  console.log(allComments);

  id++;
}
function showHideComments() {
  document.querySelector(".commentsShow").classList.toggle("isHidden");
  document.querySelector(".showHide").classList.toggle("showHideBlack");
}

function deleteComment(idToDelete) {
  document.getElementById(idToDelete).remove();
  console.log(idToDelete);
}
function emailIsValid(emailToCheck) {
  console.log("Ëmail validation");
}
document.getElementById("emailAddress").addEventListener("blur", emailIsValid);
