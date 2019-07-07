function validateForm()

{
	// var a = document.forms["myForm"]["fname"].value;

	var name = document.myForm.fname.value;
	var lname = document.myForm.lname.value;
	var email = document.myForm.email.value;
	var dec = document.myForm.des.value;

		

         if( name==null  || name  == "" || name.length<6 ) {
            alert( "Please provide More than 6 characters your name!" );
           
            return false;
         }
 			else  if(lname == null || lname == "" || lname<6) {
            alert( "Please provide More than 6 characters your Last Name" );
           
            return false;
         }

        else  if (email == null || email =="") {
         	alert("Please fill the Email Id");
         	
         	return false;
         }

        else if ( dec == null || dec ==""){
         	alert("Please Enter Some Description");
         	
         	return false;
         }
  
  return alert("Thank You for Fill The Complete Form");
}