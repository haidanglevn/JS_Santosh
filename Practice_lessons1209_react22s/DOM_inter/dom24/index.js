// TODO: when the user clicks on '#menu-sidebar' => toggle the class 'show' on '#app-sidebar'
const bar = document.querySelector("#menu-sidebar");
bar.addEventListener("click", () => {
  document.querySelector("#app-sidebar").classList.toggle("show");
});
