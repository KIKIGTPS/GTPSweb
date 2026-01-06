document.addEventListener('DOMContentLoaded', () => {
    const serverIPElement = document.getElementById('serverIP');

    if (serverIPElement) {
        serverIPElement.parentElement.addEventListener('click', () => {
            const ipAddress = serverIPElement.innerText;
            navigator.clipboard.writeText(ipAddress)
                .then(() => {
                    const copyTextSpan = serverIPElement.parentElement.querySelector('.copy-text');
                    if (copyTextSpan) {
                        copyTextSpan.innerText = '(Kopeeritud!)';
                        setTimeout(() => {
                            copyTextSpan.innerText = '(Kliki kopeerimiseks!)';
                        }, 2000);
                    }
                })
                .catch(err => {
                    alert('IP-aadressi kopeerimine ebaõnnestus: ' + err);
                });
        });
    }
});
