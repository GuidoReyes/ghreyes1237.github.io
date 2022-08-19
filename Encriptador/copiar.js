let copyToClipboardButton = document.getElementById("copyToClipboard");

copyToClipboardButton.addEventListener("click", () => {
  let textToCopy = document.getElementById("msg").value;

  if (navigator.clipboard) {
    navigator.clipboard.writeText(textToCopy);
  }
});
