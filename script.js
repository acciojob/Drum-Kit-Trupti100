// Function to play the sound
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return; // Exit if there is no audio element for the key
    audio.currentTime = 0; // Rewind the audio to the start
    audio.play();
    key.classList.add('playing');
}

// Function to remove the "playing" class when the transition ends
function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // Skip if it's not a transform transition
    this.classList.remove('playing');
}

// Add event listeners
const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
