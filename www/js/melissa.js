$(document).ready(function() {
	
	$('#reply-container').hide();
	
	$('#command').on('input', function() {
	  var command = $('#command').val();
	  var reply = $('#reply');
	  var reply_container = $('#reply-container');

	  if(command == '') {
	  	  reply_container.hide();
	  }
	  else if(command == 'hey') {
		  reply.html('Hey there!');
		  reply_container.show();
	  } else if(command == 'who are you') {
		  reply.html('I am Melissa, your lovely virtual assistant.');
		  reply_container.show();
	  }
	});
});