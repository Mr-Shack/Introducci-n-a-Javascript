document.getElementById("addCommentButton").addEventListener("click", function() {
    const commentInput = document.getElementById("commentInput");
    const commentsContainer = document.getElementById("commentsContainer");

    if (commentInput.value.trim() !== "") {
        const commentDiv = document.createElement("div");
        commentDiv.className = "comment";
        const commentText = document.createElement("p");
        commentText.textContent = commentInput.value;
        const date = new Date();
        const commentDate = document.createElement("p");
        commentDate.className = "date";
        commentDate.textContent = `Publicado el: ${date.toLocaleDateString()} a las ${date.toLocaleTimeString()}`;
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Eliminar";
        deleteButton.style.marginTop = "10px";
        deleteButton.addEventListener("click", function() {
            commentsContainer.removeChild(commentDiv);
        });
        commentDiv.appendChild(commentText);
        commentDiv.appendChild(commentDate);
        commentDiv.appendChild(deleteButton);
        commentsContainer.appendChild(commentDiv);
        commentInput.value = "";
    } else {
        alert("Por favor, escribe un comentario antes de agregarlo.");
    }
});
