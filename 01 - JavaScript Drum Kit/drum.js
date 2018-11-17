window.onload = function() {
    function playSound(e) {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
        if (!audio) return; // stop running the function
        audio.currentTime = 0; // rewind to start. If don't put this, it's gonna play only one time/delay when hit continuously.
        audio.play();
        key.classList.add('playing'); // add the style to key
    }

    function removeTransition(e) {
        console.log(e);
        if (e.propertyName !== "transform") return; // skip all that don't have a propertyName as 'transform' --> transform appears when the key added class 'playing' (see more in style.css)
        this.classList.remove('playing');
    }

    window.addEventListener('keydown', playSound);
    const buttons = document.querySelectorAll('.key');
    buttons.forEach(key => key.addEventListener('transitionend', removeTransition));
};