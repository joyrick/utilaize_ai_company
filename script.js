// Using JavaScript to add smooth scrolling to anchor links
const anchorLinks = document.querySelectorAll('a[href^="#"]');

anchorLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth',
    });
  });
});

function changeSpan() {
  var span = document.getElementById("mainspan");
  var texts = ["generative design", "custom LLMs", "private GPT chatbots", "AI models"];
  var index = 0;

  setInterval(function() {
    span.innerHTML = texts[index];
    index = (index + 1) % texts.length;
  }, 2000);
}

function checkMobileViewport() {
  // Get the current viewport width
  const viewportWidth = window.innerWidth || document.documentElement.clientWidth;

  // Define the threshold width for mobile devices
  const mobileThreshold = 768; // Adjust this value according to your needs

  // Check if the viewport width is less than the mobile threshold
  if (viewportWidth < mobileThreshold) {
    document.getElementById("btn_main").style.display = "none";
    document.getElementById("flex_container_card").style.display = "none";
    yourFunction();
  }
}

// Attach the 'load' event listener to the window object
window.addEventListener('load', checkMobileViewport);


