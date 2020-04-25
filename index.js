var descriptions = [
  {
    title: "Guess IT",
    des:
      "A Simple Android number game built with Android studio and Java",
    link: "https://github.com/richardjob/Guess_it",
  },
  {
    title: "Image Classifier",
    des: "A Image classifier which works on web, built using google tensorflow.js (pre-built model)",
    link: "https://github.com/richardjob/image-classifier",
  },
  {
    title: "Mars Man",
    des:
      "A google action using NASA public api to get weather updates and images from Mars.",
    link: "https://github.com/richardjob/mars-man",
  },
];

function slideNext() {
  var divs = document.getElementsByClassName("nxtfunc");
  for (var i = 0; i < divs.length; i++) {
    var classes = divs[i].className.split(" ");
    if (classes.includes("active")) {
      document.getElementById(
        "projDescription"
      ).innerHTML = `<h3 style="transition: ease-in-out;">${descriptions[i].title}</h3><p style="transition: ease-in-out";>${descriptions[i].des}</p>
      <p style="font-size: 40px; transition: ease-in-out;"><a href="${descriptions[i].link}" target="_blank"
              class="fa fa-github text-white"></a></p>`;
    }
  }
}

$(document).ready(() => {
  setInterval(slideNext, 0);
});
