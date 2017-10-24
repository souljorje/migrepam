'use strict';

document.querySelector('.button').onclick = function() {

    let video = document.querySelector('.background-media__video');
    let image = document.querySelector('.background-media__image');

    this.classList.toggle('button_is_off');

    if ( this.classList.contains('button_is_off') ) {
        video.style.display = "none";
        image.style.display = "block";
    }
    else {
        video.style.display = "block";
        image.style.display = "none";
    }
}
