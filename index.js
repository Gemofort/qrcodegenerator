const refText = document.getElementById("link-ref");

let qrcode = new QRCode("qrcode", {
  text: refText.innerText,
  width: 240,
  height: 240,
  colorDark: "#000000",
  colorLight: "#ffffff",
  correctLevel: QRCode.CorrectLevel.H
});