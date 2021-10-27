$('.toggle-btn').on('click', function(){
  $(this).toggleClass('active')
  $('.nav-links').toggleClass('active')
})

// $('document').scroll(function(){
//   console.log('hello');
// })

$(document).scroll(function () {
  var $nav = $("nav");
  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
});