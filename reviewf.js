function submitReview() {
    var name = document.getElementById("name").value;
    var comments = document.getElementById("comments").value;
    
    var reviewList = document.getElementById("reviewList");
    var reviewDiv = document.createElement("div");
    reviewDiv.innerHTML = "<strong>" + name + ":</strong> " + comments + "<br><br>";
    reviewList.appendChild(reviewDiv);
    
    document.getElementById("reviewForm").reset();
}
