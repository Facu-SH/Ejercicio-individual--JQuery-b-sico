$(document).ready(function() {
  $('#btn-hide').click(function() {
    $('#hidden-image').hide();
    $('#page-title').text('¡No tenemos ninguna imagen!');
  });

  $('#btn-show').click(function() {
    $('#hidden-image').show();
    $('#page-title').text('¡Mirá la siguiente imagen!');
  });
});
