
document.addEventListener("DOMContentLoaded", () => {
  let favCountEl = document.getElementById("favCount");



let favCount = 0;






// Heart Button Functionality
  document.querySelectorAll(".fav-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      favCount++;
      favCountEl.textContent = favCount;
      btn.querySelector("i").classList.remove("fa-regular");
      btn.querySelector("i").classList.add("fa-solid", "text-red-500");
    });
  });

});