var addCommentBtn = document.querySelector("#addComment");
var commentID = document.querySelector("#commentID");
var commentEmail = document.querySelector("#emailAddress");
var commentsShow = document.querySelector(".commentsShow");
var comment = document.querySelector("#textBoxComment");
var id = 1000;

var divCommClass = document.querySelectorAll(".divCommClass");
class Comment {
  constructor(id, email, message) {
    this.id = id;
    this.message = message;
    this.email = email;
  }
}
const allComments = [];

function createCommnent() {
  if (validateEmail() === true && checkIfMessageIsValid() === true) {
    validateEmail();
    // checkIfMessageIsValid();
    //create comment
    const newComment = new Comment(id, commentEmail.value, comment.value);
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
    commClose.innerHTML = `<p onclick="deleteComment(${id})">Delete comment with id: #ID${id} !</p>`;
    divComm.appendChild(commClose);
    allComments.push(newComment);
    console.log(allComments);
    id++;
    clearText(commentEmail);
    clearText(comment);
  }
}
function showHideComments() {
  //toggle show hide on comments
  document.querySelector(".commentsShow").classList.toggle("isHidden");
  document.querySelector(".showHide").classList.toggle("showHideBlack");
}

function deleteComment(idToDelete) {
  //Delete comment from screen
  document.getElementById(idToDelete).remove();
  removeCommFromArray(idToDelete);
}

function removeCommFromArray(idToRemove) {
  // remove comment from Array
  for (var i = 0; i < allComments.length; i++) {
    if (allComments[i].id == idToRemove) {
      allComments.splice(i, 1);
    }
  }
  console.log(allComments);
}

function clearText(fieldQiery) {
  //clear an object
  fieldQiery.value = "";
}

function validateEmail() {
  emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (emailPattern.test(commentEmail.value) == false) {
    commentEmail.style.border = "1px solid red";
    commentEmail.value = "";
    commentEmail.placeholder = "Please enter a valid email address";

    return false;
  } else {
    commentEmail.style.border = "1px solid black";
    commentEmail.placeholder = "Please eneter your e-mail address";
    return true;
  }
}
function checkIfMessageIsValid() {
  if (comment.value.length < 3) {
    comment.value = "";
    comment.placeholder = "At least 3 characters...";
    return false;
  } else {
    comment.placeholder = "Your message here...";
    return true;
  }
}
addCommentBtn.addEventListener("click", createCommnent);
