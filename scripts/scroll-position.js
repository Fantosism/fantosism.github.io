function trackScrollPosition() {
  let aboutContainerPosition = $('.about-section').offset().top
  if ($(window).scrollTop() > aboutContainerPosition) {
    $('.nav-container').addClass('dark-nav-bar')
    $('.logo').addClass('dark-nav-bar')
    $('.HOME').addClass('dark-nav-bar')
    $('.ABOUT').addClass('dark-nav-bar')
    $('.PORTFOLIO').addClass('dark-nav-bar')
    $('.GITHUB').addClass('dark-nav-bar')
    $('.CONTACT').addClass('dark-nav-bar')
  } else {
    $('.nav-container').removeClass('dark-nav-bar')
    $('.logo').removeClass('dark-nav-bar')
    $('.HOME').removeClass('dark-nav-bar')
    $('.ABOUT').removeClass('dark-nav-bar')
    $('.PORTFOLIO').removeClass('dark-nav-bar')
    $('.GITHUB').removeClass('dark-nav-bar')
    $('.CONTACT').removeClass('dark-nav-bar')
  }
}

$(document).ready(function() {
  trackScrollPosition()
  $(window).scroll(function() {
    trackScrollPosition()
  })
  $(window).resize(function() {
    trackScrollPosition()
  })
})
