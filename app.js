const formulario = document.getElementById("formulario");
const contenedorQR = document.getElementById("contenedorQR");

const QR = new QRCode(contenedorQR);

formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    QR.makeCode(formulario.url.value);
});
