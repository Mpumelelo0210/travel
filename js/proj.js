

/*---------------------Toggle show more or less-----------------------------*/
document.querySelectorAll(".showmore").forEach(function (p) {
  p.querySelector("a").addEventListener("click", function () {
    p.classList.toggle("show");
    this.textContent = p.classList.contains("show") ? "Show Less" : "Show More";
  });
});

