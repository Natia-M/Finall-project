function sliderFn() {
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  function renderSlides() {
    slides.forEach((slide, index) => {
      slide.classList.remove("show-slide");
    });
    slides[currentSlide].classList.add("show-slide");
  }

  function goToNextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    renderSlides();
  }

  setInterval(goToNextSlide, 5000);
  renderSlides();
}

sliderFn();
// first section//
document.addEventListener("DOMContentLoaded", () => {
  const progressBars = document.querySelectorAll(".progress");

  function fillProgressBars() {
    progressBars.forEach((bar) => {
      const percentage = bar.getAttribute("data-percentage");
      const barPosition = bar.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;

      if (barPosition < screenPosition) {
        bar.style.width = percentage + "%";
      }
    });
  }

  window.addEventListener("scroll", fillProgressBars);
});
// section 4//
const slides = document.querySelectorAll(".slide-2");
const dots = document.querySelectorAll(".dot");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("show-2");
    dots[i].classList.remove("active");
  });

  slides[index].classList.add("show-2");
  dots[index].classList.add("active");
}

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    currentSlide = parseInt(dot.getAttribute("data-slide"));
    showSlide(currentSlide);
  });
});

showSlide(currentSlide);
//section 5//
function filterProjects(category) {
  let projects = document.querySelectorAll(".project");
  let buttons = document.querySelectorAll(".sidebar button");
  buttons.forEach((btn) => btn.classList.remove("selected"));

  let activeButton = document.querySelector(
    `.sidebar button[onclick="filterProjects('${category}')"]`
  );
  if (activeButton) activeButton.classList.add("selected");

  projects.forEach((project) => {
    if (category === "all") {
      project.classList.remove("hidden");
    } else {
      if (project.classList.contains(category)) {
        project.classList.remove("hidden");
      } else {
        project.classList.add("hidden");
      }
    }
  });
}
//section 6 //
document.querySelectorAll(".team-box").forEach((box) => {
  box.addEventListener("mouseenter", () => {
    box.querySelector(".team-inner").style.transform = "rotateY(180deg)";
  });

  box.addEventListener("mouseleave", () => {
    box.querySelector(".team-inner").style.transform = "rotateY(0deg)";
  });
});
//section 7 //
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const modal = document.getElementById("successModal");
  const closeButton = document.querySelector(".close");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const website = document.getElementById("website").value;
    const message = document.getElementById("message").value;
    const requestData = {
      title: name,
      body: `${email}, ${website}, ${message}`,
      userId: 1,
    };
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => response.json())
      .then((data) => {
        data = { desc: "Message has been sent successfully", status: 1 };

        if (
          data.desc === "Message has been sent successfully" &&
          data.status === 1
        ) {
          modal.style.display = "flex";
          form.reset();
        } else {
          alert("Error: Unexpected response from server.");
        }
      })
      .catch((error) => {
        alert("Error sending message!");
      });
  });

  closeButton.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  modal.style.display = "none";
});
