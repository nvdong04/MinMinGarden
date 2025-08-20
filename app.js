function generateQRCode() {
    const text = document.getElementById('text-input').value; // Get input text
    const qrCodeContainer = document.getElementById('qr-code'); // Get the div where QR code will be displayed

    if (text) {
        QRCode.toCanvas(qrCodeContainer, text, function(error) {
            if (error) console.error(error);
            console.log('QR Code generated!');
        });
    } else {
        alert('Please enter some text or a URL!');
    }
}
