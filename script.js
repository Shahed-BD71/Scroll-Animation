const boxes = document.querySelectorAll(".box");

checkBoxes();

window.addEventListener("scroll", checkBoxes);
function checkBoxes() {
  const triggerBottom = (window.innerHeight / 6) * 4;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
