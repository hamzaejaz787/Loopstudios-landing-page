const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-lists");
  const navLinks = document.querySelectorAll(".nav-lists li");

  //Toggle Nav
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    //Animation
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navListsFade 1.5s ease`;
      }
    });
    burger.classList.toggle("toggle");
  });
};

navSlide();
