var contactInfo = "UmVzdW0mZWFjdXRlOzogPGEgaHJlZj0iaHR0cHM6Ly9nb28uZ2wvR0FXN201IiB0YXJnZXQ9Il9ibGFuayI+UERGPC9hPiAmYnVsbDsgPGEgaHJlZj0iaHR0cHM6Ly9nb28uZ2wvdFhwU0x1IiB0YXJnZXQ9Il9ibGFuayI+TVMgV29yZDwvYT48YnIvPjxici8+PGEgaHJlZj0ibWFpbHRvOndpbGxpYW0uc2FsZW1lQGdtYWlsLmNvbSIgdGFyZ2V0PSJfYmxhbmsiIGNsYXNzPSJ1cHBlcmNhc2UiPndpbGxpYW0uc2FsZW1lQGdtYWlsLmNvbTwvYT4=";

window.insertContactInfo = function () {
    var contactButton = document.getElementById('contact-me-button');
    var contactInfoContainer = document.getElementById('contact-info');
    if (!contactButton.disabled) {
        var decodedContactInfo = window.atob(contactInfo);
        contactButton.disabled = true;
        contactInfoContainer.className += ' enabled';
        contactInfoContainer.innerHTML = decodedContactInfo;
        window.scrollTo(0,document.body.scrollHeight);
    }
};
