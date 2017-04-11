console.log("hello");

$("#clickMe").on("click", myTrueFeelings);

function myTrueFeelings() {
  $("#realFeelings").append("<h3>these are my confessions</h3>");
}