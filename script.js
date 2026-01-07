setInterval(() => {
  const confetti = document.createElement("div");
  confetti.classList.add("confetti");
  confetti.innerHTML = ["🎊","🎉","✨","🎈","💖"][Math.floor(Math.random()*5)];
  confetti.style.left = Math.random() * 100 + "vw";
  confetti.style.animationDuration = Math.random() * 3 + 2 + "s";
  document.body.appendChild(confetti);

  setTimeout(() => confetti.remove(), 5000);
}, 250);

// BUTTON EXTRA BLAST
function partyBlast() {
  for (let i = 0; i < 30; i++) {
    const blast = document.createElement("div");
    blast.classList.add("confetti");
    blast.innerHTML = "🎉";
    blast.style.left = Math.random() * 100 + "vw";
    blast.style.animationDuration = "2s";
    document.body.appendChild(blast);

    setTimeout(() => blast.remove(), 3000);
  }
}