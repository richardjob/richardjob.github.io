var descriptions = [
  {
    title: "Guess IT",
    des: "",
    link: "https://github.com/richardjob/Guess_it",
  },
  {
    title: "Image Classifier",
    des: "",
    link: "https://github.com/richardjob/image-classifier",
  },
  {
    title: "Mars Man",
    des: "",
    link: "https://github.com/richardjob/mars-man",
  },
];

var carouselState = 0;

/////// Next()
function next() {
  if (carouselState + 1 == descriptions.length) {
    carouselState = 0;
  } else {
    carouselState++;
  }

  document.getElementById(
    "projDescription"
  ).innerHTML = `<h3>${descriptions[carouselState].title}</h3><p>${descriptions[carouselState].des}</p>
<p style="font-size: 40px; transition: ease-in-out;"><a href="${descriptions[carouselState].link}" target="_blank"
        class="fa fa-github text-white"></a></p>`;
}

/////// Previous()
function prev() {
  if (carouselState - 1 == -1) {
    carouselState = descriptions.length - 1;
  } else {
    carouselState--;
  }
  document.getElementById(
    "projDescription"
  ).innerHTML = `<h3>${descriptions[carouselState].title}</h3><p>${descriptions[carouselState].des}</p>
<p style="font-size: 40px; transition: ease-in-out;"><a href="${descriptions[carouselState].link}" target="_blank"
        class="fa fa-github text-white"></a></p>`;
}

$(document).ready(() => {
  setInterval(next, 8000);
});
