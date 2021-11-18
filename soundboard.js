window.onload = function () {
    const hamburger = document.querySelector(".mobile-trigger"); // Set a constant variable for the hamburger link
    const navigation = document.querySelector(".desktop-links"); // Set a constant variable for the unordered nav list
      
  // Toggle function checks the state of the navigation constant and displays or hides the links
  function toggle() {
    if (window.getComputedStyle(navigation).display === "none") {
      navigation.style.display = "block";
    } else {
      navigation.style.display = "none";
    }
  }
  
  // Create an "even listener" to watch for clicks on the hamburger link
  // When it detects a click it executes the toggle() function above
  hamburger.addEventListener("click", toggle);
};

function lore() {
    alert("Upon a pale horse he rides, this spark of endless suns, this Keeper of the Light. Ezalor long ago escaped the Fundamental plane, separating from the other ancient forces to which he was bound within the great Primordial harmony. He is a power grown sentient in the dawn of the universe, and now rides forth in all planes at once, one step ahead of pursuing chaos, bearing his gift with him at the end of a radiant staff. His majestic truth lies hidden beneath the outward appearance of a slightly doddering old man who barely stays in the saddle. However, when faced with the challenge of chaos, or the forces of darkness, his primordial light bursts forth, and his full power is revealed, transforming him once again into a force to be reckoned with.");
}