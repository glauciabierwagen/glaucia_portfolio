const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
// add an eventlistener to listen to the click
panel.addEventListener("click", () => {
  removeActiveClass();
  panel.classList.add("active");
});
});

function removeActiveClass() {
  panels.forEach((panel) => {
    //remove all active panels classes
    panel.classList.remove("active");
  })
}