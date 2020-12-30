function closeNav(){
  console.log('Hello');
  document.getElementById('nav-toggler').click()
}

var descriptions = [
  {
    title: "Guess IT",
    des:
      "A Simple Android number game built with Android studio and Java",
    link: "https://github.com/richardjob/Guess_it",
  },
  {
    title: "Image Classifier",
    des: "A Image classifier which works on web, built using React.js ,Node.js and Imagga API",
    link: "https://github.com/richardjob/react-image-classifier-public",
  },
  {
    title: "Mars Man",
    des:
      "A google action using NASA public api to get weather updates and images from Mars.",
    link: "https://github.com/richardjob/mars-man",
  },
]

function slideNext() {
  var divs = document.getElementsByClassName("nxtfunc");
  for (var i = 0; i < divs.length; i++) {
    var classes = divs[i].className.split(" ");
    if (classes.includes("active")) {
      document.getElementById(
        "projDescription"
      ).innerHTML = `<h3 class="text-center">${descriptions[i].title}</h3><p class="mt-4">${descriptions[i].des}</p>
      <p class="text-center"><a href="${descriptions[i].link}"><img src="./assets/icons/GitHub.png" width="32px" target="_blank"></img></a>
      <a href="${descriptions[i].link}"><img class="m-4" src="./assets/icons/lightning.svg" width="32px" target="_blank"></img></a></p>`;
    }
  }
}

$(document).ready(() => {
  setInterval(slideNext, 0);
});