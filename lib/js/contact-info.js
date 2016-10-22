var contactInfo = "UmVzdW0mZWFjdXRlOzogPGEgaHJlZj0iaHR0cHM6Ly9nb28uZ2wvNm1hOUhuIiB0YXJnZXQ9Il9ibGFuayI+SFRNTDwvYT4gJmJ1bGw7IDxhIGhyZWY9Imh0dHBzOi8vZ29vLmdsL0dBVzdtNSIgdGFyZ2V0PSJfYmxhbmsiPlBERjwvYT4gJmJ1bGw7IDxhIGhyZWY9Imh0dHBzOi8vZ29vLmdsL3RYcFNMdSIgdGFyZ2V0PSJfYmxhbmsiPk1TIFdvcmQ8L2E+PGJyLz48YnIvPjxhIGhyZWY9Im1haWx0bzp3aWxsaWFtLnNhbGVtZUBnbWFpbC5jb20iIHRhcmdldD0iX2JsYW5rIiBjbGFzcz0idXBwZXJjYXNlIj53aWxsaWFtLnNhbGVtZUBnbWFpbC5jb208L2E+";

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
