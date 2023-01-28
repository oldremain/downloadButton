const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  btn.classList.toggle("show-loader");
  btn.setAttribute("disabled", true);

  setTimeout(() => {
    btn.classList.toggle("show-loader");
    btn.removeAttribute("disabled");
  }, 3000);
});
