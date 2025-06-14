const copyClipboardButton = document.querySelector(".copy-clipboard-btn");
copyClipboardButton.addEventListener("click", handleClick);
let runningAnimation = false;
function handleClick(e) {
  navigator.clipboard.writeText(e.target.previousElementSibling.textContent);
  if (!runningAnimation) {
    runningAnimation=true
     e.target.textContent = "copiée 🎊";
     setTimeout(() => {
        e.target.textContent = "Copier 📚";
        runningAnimation = false;
     }, 1000);

  }
}
