




document.addEventListener('DOMContentLoaded', function () {
  

    // Navbar links staggered fade-in
    gsap.from("nav ul li", {
        opacity: 0,
        y: -20,
        duration: 1,
        stagger: 0.2, // Delays each item
        ease: "power2.out",
    });
    
    // Animate Category Cards when the page loads
    gsap.from(".category-card", {
      opacity: 0,      // Start with opacity 0 (hidden)
      y: 50,           // Slide up from 50px below
      duration: 1,     // Duration of the animation
      stagger: 0.3,    // Add stagger to the cards for cascading effect
      ease: "power3.out" // Smooth easing function
    });
  
    // Animate View Buttons
    gsap.from(".view-button", {
      opacity: 0,      // Start with opacity 0 (hidden)
      y: 50,           // Slide up from 50px below
      duration: 1,     // Duration of the animation
      delay: 0.5,      // Add delay for better effect
      stagger: 0.2,    // Stagger the buttons for a nice delay
      ease: "power3.out" // Smooth easing
    });
  
    // Hover effects for Category Cards: Scale on hover
    document.querySelectorAll('.category-card').forEach(card => {
      card.addEventListener('mouseenter', function () {
        gsap.to(card, { scale: 1.05, duration: 0.3 });  // Scale up on hover
      });
      card.addEventListener('mouseleave', function () {
        gsap.to(card, { scale: 1, duration: 0.3 });    // Scale back to normal on mouse leave
      });
    });
  
    // Hover effects for Buttons: Scale effect on hover
    document.querySelectorAll('.view-button').forEach(button => {
      button.addEventListener('mouseenter', function () {
        gsap.to(button, { scale: 1.05, duration: 0.3 }); // Scale up button on hover
      });
      button.addEventListener('mouseleave', function () {
        gsap.to(button, { scale: 1, duration: 0.3 });    // Scale back to normal on mouse leave
      });
    });
  
  });
 