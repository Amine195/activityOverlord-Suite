$(document).ready(function(){

	// Validate
	// http://bassistance.de/jquery-plugins/jquery-plugin-validation/
	// http://docs.jquery.com/Plugins/Validation/
	// http://docs.jquery.com/Plugins/Validation/validate#toptions

		$('#reg-form').validate({
	    rules: {
	      name: {
	        required: true
	      },
	      email: {
	        required: true,
	        email: true
	      },
	      password: {
	      	minlength: 6,
	        required: true
	      },
	      confirmation: {
	      	minlength: 6,
          required: true,
	      	equalTo: "#password"
	      }
	    },
      errorElement : 'div',
      errorPlacement: function(error, element) {
        var placement = $(element).data('error');
        if (placement) {
          $(placement).append(error)
        } else {
          error.insertAfter(element);
        }
      }
	  });
});
