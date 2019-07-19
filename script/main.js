$(document).ready(function() {

  var ans = '';

  $('button#AC').on('click', function () {
    $('#display').html('');
  });

  $('button#CE').on('click', function () {
    var display = $('#display').html();
    $('#display').html(display.slice(0, display.length-1));
  });

  $('button.input').on('click', function() {
    if($('#display').html() == '0'){
      $('#display').html('');
    };
    $('#display').append(this.id);
  });

  $('button#equal').on('click', function () {
    var result = eval($('#display').html());
    ans = result;
    $('#display').html(result);
  });

  $('button#ans').on('click', function () {
    $('#display').append(ans);
  });
  
});