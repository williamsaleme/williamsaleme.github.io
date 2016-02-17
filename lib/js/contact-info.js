var contactInfo = "UmVzdW0mZWFjdXRlOzogPGEgaHJlZj0iaHR0cHM6Ly9nb28uZ2wvNm1hOUhuIiB0YXJnZXQ9Il9ibGFuayI+SFRNTDwvYT4gb3IgPGEgaHJlZj0iaHR0cHM6Ly9nb28uZ2wvR0FXN201IiB0YXJnZXQ9Il9ibGFuayI+UERGPC9hPjxici8+PGJyLz48YSBocmVmPSJtYWlsdG86d2lsbGlhbS5zYWxlbWVAZ21haWwuY29tIiB0YXJnZXQ9Il9ibGFuayIgY2xhc3M9InVwcGVyY2FzZSI+d2lsbGlhbS5zYWxlbWVAZ21haWwuY29tPC9hPg==";

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
