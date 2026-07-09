const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting){
        e.target.classList.add('is-visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(el => io.observe(el));

window.onload = function() {
  const openStatus = document.getElementById('openStatus');
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  const currentDay = currentTime.getDay(); 
  if (currentHour >= 13 && currentHour < 20) {
      openStatus.textContent = "Open now";
    
  } else if(currentHour >= 20 && currentHour < 22) {
      openStatus.textContent = "Closing Soon";
      openStatus.style.backgroundColor = "#C9824A";
      openStatus.style.color = "#F5F0E8";
     
  } else if(currentHour >= 11 && currentHour < 13) {
      openStatus.textContent = "Opening Soon";
      openStatus.style.backgroundColor = "#E6C88A";
  }
    else {
      openStatus.textContent = "Closed now :(";
      openStatus.style.backgroundColor = "var(--coffee)";
      openStatus.style.color = "#F5F0E8";
  }}