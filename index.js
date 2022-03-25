let closeButton = document.getElementById("closeButton");
let likeButton = document.getElementById("likeButton");
let modal = document.getElementsByClassName("modal-wrapper")[0];

closeButton.onclick = function () {
    modal.style.display = 'none';
};

likeButton.onclick = function () {
    modal.style.display = 'block';
};