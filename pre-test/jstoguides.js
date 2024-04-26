if (localStorage.getItem("pretestcomp") === "true") {
document.getElementById("guides").disabled = false;
document.getElementById("post").disabled = false;
}

function unableToClick(event) {
    if (event.target.disabled) {
        alert("You can't access this yet until you've finished the pre-test!");
    }

}
