const btn = document.querySelector(".btn");

let timerId = undefined;
btn.addEventListener("click", () => {
  btn.classList.toggle("show-loader");
  btn.setAttribute("disabled", true);

  if (timerId) clearTimeout(timerId);
  timerId = setTimeout(() => {
    btn.classList.toggle("show-loader");
    btn.removeAttribute("disabled");
  }, 3000);
});
