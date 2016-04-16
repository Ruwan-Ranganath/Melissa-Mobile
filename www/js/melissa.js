document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
	
	$('#reply-container').hide();
	
	$('#command').on('input', function() {
	  var command_array = $('#command').val().split(' ');
	  var reply = $('#reply');
	  var reply_container = $('#reply-container');
	  
	  function check_message(keywords) { 
		  var control = keywords.every(function(val) {
			  return command_array.indexOf(val) >=0; 
		  }); 
		  return control;
	  }

	  function random_message(messages) {
	  	  return messages[Math.floor(Math.random() * messages.length)];
	  }

	  if(check_message(['who', 'are', 'you'])) {

		  var messages = ['I am Melissa, your lovely personal assistant.', 'Melissa, didnt I tell you before?','You ask that so many times! I am Melissa.'];
		  reply.html(random_message(messages));
		  reply_container.show();

	  } else if(check_message(['how', 'am', 'i']) || check_message(['how', 'i', 'look'])) {

		  var replies = replies =['You are goddamn handsome!', 'My knees go weak when I see you.', 'You are sexy!', 'You look like the kindest person that I have met.'];
		  reply.html(random_message(replies));
		  reply_container.show();

	  } else if(check_message(['tell', 'joke'])) {

		  var jokes = ['What happens to a frogs car when it breaks down? It gets toad away.', 'Why was six scared of seven? Because seven ate nine.', 'What is the difference between snowmen and snowwomen? Snowballs.', 'No, I always forget the punch line.'];
		  reply.html(random_message(jokes));
		  reply_container.show();

	  } else if(check_message(['where', 'born'])) {

		  reply.html('I was created by a magician named Tanay, in India, the magical land of himalayas.');
		  reply_container.show(); 

  	  } else if(check_message(['how', 'are', 'you'])) {

		  reply.html('I am fine, thank you.');
		  reply_container.show();

      } else if(check_message(['massage'])) {

		  navigator.vibrate(5000);

      } else if(check_message(['call']) || check_message(['message'])) {

		  //Search Contacts In Progress

	  } else {
	  	reply_container.hide();
	  }
	});
}
