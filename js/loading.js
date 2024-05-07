document.addEventListener("DOMContentLoaded", function () {
  loading();
  window.addEventListener("load", function () {
    return;
  });
});
function loading() {
  const footerPlaceholder = document.getElementById("loading");
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "loading.html", false);
}
