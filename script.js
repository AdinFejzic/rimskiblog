const quoteButton = document.getElementById("quote-button");
const quoteBox = document.getElementById("quote-box");
const forumStatus = document.getElementById("forum-status");
const likeButtons = document.querySelectorAll(".like-button");
const pollButtons = document.querySelectorAll(".poll-button");
const pollResult = document.getElementById("poll-result");

const romanComments = [
  "\"Panem et circenses\" danas znaci: kruh, zabava i nimalo mira.",
  "\"Forum je mjesto gdje svi govore, a niko ne zavrsava posao na vrijeme.\"",
  "\"Ako krov izdrzi kisu i senator izdrzi govor, dan se racuna kao uspjeh.\"",
  "\"U Rimu nikad nije dosadno, samo je nekad previse glasno.\""
];

const forumUpdates = [
  "Danas narod najvise komentarise guzvu na Forumu i nove zakone okacene na plocu.",
  "Najnovija vijest: vise ljudi prati gladiatore nego sto cita nove uredbe.",
  "Stanari insula traze popravku krovova, ali sluzbenici i dalje traze jos jedan pecat.",
  "Na Forumu kruzi glasina da ce poreznici opet smisliti novu taksu prije vikenda."
];

let quoteIndex = 0;
const pollValues = [34, 26, 22, 18];

quoteButton.addEventListener("click", function () {
  quoteIndex = (quoteIndex + 1) % romanComments.length;
  quoteBox.textContent = romanComments[quoteIndex];
  forumStatus.textContent = forumUpdates[quoteIndex];
});

likeButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const countElement = button.querySelector("strong");
    const currentLikes = Number(button.dataset.likes);

    if (button.classList.contains("active")) {
      const nextLikes = currentLikes - 1;
      button.dataset.likes = String(nextLikes);
      countElement.textContent = String(nextLikes);
      button.classList.remove("active");
      return;
    }

    const nextLikes = currentLikes + 1;
    button.dataset.likes = String(nextLikes);
    countElement.textContent = String(nextLikes);
    button.classList.add("active");
  });
});

pollButtons.forEach(function (button, index) {
  button.addEventListener("click", function () {
    pollButtons.forEach(function (item) {
      item.classList.remove("active");
    });

    pollValues[index] += 3;
    button.classList.add("active");

    pollValues.forEach(function (value, valueIndex) {
      const output = document.getElementById(`poll-${valueIndex}`);
      output.textContent = `${value}%`;
    });

    pollResult.textContent = `Tvoj glas je otisao na: ${button.dataset.choice}.`;
    forumStatus.textContent = `Na Forumu se sad najvise raspravlja o temi: ${button.dataset.choice}.`;
  });
});
