
gsap.to('.loader', {
  y: -1000,
  delay: 3.5,
  duration: 1
});


gsap.from('h1', {
  opacity: 0,
  duration: 3,
  onstart: function () {
    $('h1').textillate({ in: { effect: 'fadeInRight' } });
  }
});


gsap.from('.video1', {
  opacity: 0,
  x: 99,
  duration: 2
});


console.log('jo');