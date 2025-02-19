document.addEventListener("DOMContentLoaded", function() {
    const gameUrl = "https://google.com"; 
    new QRCode(document.getElementById("qrcode"), {
        text: gameUrl,
        width: 200,
        height: 200,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
});
