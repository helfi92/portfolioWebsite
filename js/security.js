//This function will enable the submit button if the required inputs are filled up. In the other hand,
//The button will be disabled if required inputs are incomplete/missing
function enableDisableContactFormSubmitButton(name,email,subject,message,submitBtn){
	
	name = name.val();
	email = email.val();
	subject = subject.val();
	message = message.val();
	
	if(!!name && !!email && !!subject && !!message ){
		submitBtn.removeAttr('disabled');
		submitBtn.removeClass("disabledSubmitBtn");
		submitBtn.addClass("enableSubmitBtn");
	}else{
		submitBtn.attr('disabled','disabled');
		submitBtn.addClass("disabledSubmitBtn");
		submitBtn.removeClass("enableSubmitBtn");

	}
}

//This function will set the onChange events of the contact form elements
function setContactForm(){
	var name,email,subject,message,submitBtn;	
	submitBtn = $("#contactFormBtn");
	name = $("#name");
	email = $("#email");
	subject = $("#subject");
	message = $("#message");
	
	name.keyup(function(){
		enableDisableContactFormSubmitButton(name, email, subject, message, submitBtn);
	});
	email.keyup(function(){
		enableDisableContactFormSubmitButton(name, email, subject, message, submitBtn);
	});
	subject.keyup(function(){
		enableDisableContactFormSubmitButton(name, email, subject, message, submitBtn);
	});
	message.keyup(function(){
		enableDisableContactFormSubmitButton(name, email, subject, message, submitBtn);
	});
	
}


