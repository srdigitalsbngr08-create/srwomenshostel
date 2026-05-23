// WOW JS

new WOW().init();

// MOBILE MENU

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// ANIME JS

anime({
  targets: ".hero-content h1",

  translateY: [-50, 0],

  opacity: [0, 1],

  duration: 2000,

  easing: "easeOutExpo",
});

anime({
  targets: ".facility-card",

  scale: [0.8, 1],

  opacity: [0, 1],

  delay: anime.stagger(120),

  easing: "easeOutElastic(1, .7)",
});

// SWEET ALERT

document.getElementById("enquiryForm").addEventListener("submit", function (e) {
  e.preventDefault();

  swal({
    title: "Enquiry Sent!",

    text: "Thank you for contacting SR Women's Hostel.",

    icon: "success",

    button: "OK",
  });

  this.reset();
});
