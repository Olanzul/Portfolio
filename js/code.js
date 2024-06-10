// Modal Box
const itemDetailModal = document.querySelector("#hire-me-modal");
const itemDetailButtons = document.querySelectorAll(".hire-me-button");

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  };
});

// klik diluar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};

// disabling submit button
const submit = document.querySelector("#submit");
submit.disabled = true;
const form = document.querySelector("#form");

form.addEventListener("keyup", function () {
  for (let i = 0; i < form.elements.length; i++) {
    if (form.elements[i].value.length !==0) {
      submit.classList.remove("disabled");
      submit.classList.add("disabled");
    } else {
      return false;
    }
  }
  submit.disabled = false;
  submit.classList.remove('disabled');
});
