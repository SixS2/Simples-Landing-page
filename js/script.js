document.addEventListener("DOMContentLoaded", function () {

  let acc = document.getElementsByClassName("accordion-btn");

  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {

      this.classList.toggle("active");

      let painel = this.nextElementSibling;

      if (painel.style.display === "block") {
        painel.style.display = "none";
      } else {
        painel.style.display = "block";
      }
    });
  }
});
