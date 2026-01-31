const slider = document.getElementById("shopSlider");

function slideLeft() {
  slider.scrollLeft -= 260;
}

function slideRight() {
  slider.scrollLeft += 260;
}



  const slider2 = document.getElementById("slider");
  const cardWidth = 285;

  document.querySelector(".next").onclick = () => {
    slider.scrollBy({ left: cardWidth, behavior: "smooth" });
  };

  document.querySelector(".prev").onclick = () => {
    slider.scrollBy({ left: -cardWidth, behavior: "smooth" });
  };
