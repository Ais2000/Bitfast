$(function () {
    $('#send-bts').on('click', function(event){
      event.preventDefault();
      $.ajax({
        type: 'post',
        url: 'transaction.php',
        data: $('#myForm').serialize(),
        success: function(responseText) {
            $('#transaction').fadeOut('fast', function () {
                $('#transaction').val(responseText).fadeIn('fast', function() {
                    setTimeout(100);
                });
            });
        }
    });

  });
});