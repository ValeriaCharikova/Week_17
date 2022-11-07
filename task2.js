function checkSpam() {
    comment = document.getElementById("comment").value;
    if (comment.match(/viagra/ig) || comment.match(/xxx/ig)) {
      result = comment.replace(/viagra/gi, "***").replace(/xxx/gi, "***");
    }
    document.getElementById("result").innerHTML = result;
  }
  