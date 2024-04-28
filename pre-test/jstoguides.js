if (localStorage.getItem("pretestcomp") === "true") {
document.getElementById("guides").disabled = false;
document.getElementById("post").disabled = false;
}

function unableToClick(event) {
    if (event.target.disabled) {
        alert("You can't access this yet until you've finished the pre-test!");
    }

}

const easterEggs = [
    "phonetics + phoenix",
    "donald greetings!",
    "a website made by 12ESTEM-C7.",
    "the secret ingredient is puyat.",
    "every syllable counts.",
    "don't cheat por favor.",

]

function getRandomMessage() {
    return easterEggs[Math.floor(Math.random() * easterEggs.length)];
  }

  // Set a random message on hover
  document.querySelector('.jokeds').addEventListener('mouseenter', function() {
    document.getElementById('joke').textContent = getRandomMessage();

  });