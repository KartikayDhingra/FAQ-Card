const acordion = document.getElementsByClassName('content-box');

for(i=0; i<acordion.length; i++) {
    acordion[i].addEventListener('click', function() {
        this.classList.toggle('active')
    })
}