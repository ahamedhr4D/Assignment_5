let loveCount = 0;
const loveCounter = document.getElementById("loveCount");
const loveIcons = document.querySelectorAll(".loveBtn");

loveIcons.forEach(icon => {
  icon.addEventListener("click", () => {
    loveCount++;
    alert("You clicked love ❤️");
    loveCounter.innerText = loveCount;
  });
});
