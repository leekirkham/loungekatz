<?php



	$response = "<span style='color:white;'>Thanks for your Message!<br>\n" .

"Your message has been submitted successfully!<br><br>\n";



if ($_POST[dosubmit] == "Submit") {







	

	$email = $_POST[email];



	// 	Confirm whether submitted email address is in valid form

	if(eregi("^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$", $email)) {



		

		// check for problematic phrases in each field 

		foreach ($_POST as $item) {

			if (eregi("MIME-Version:",$item) || eregi("Content-Type:",$item) || eregi("Content-Transfer-Encoding:",$item) || eregi("bcc:",$item) || eregi("Bcc:",$item) ){

				die('Error processing request:  please go back and try again.');

			}

		}

		

		$name = substr(trim($_POST[name]), 0, 20);

		$email = substr(trim($email), 0, 50);

		$phone = substr(trim($_POST[phone]), 0, 12);

		$message = trim($_POST[message]);



		

			// email_to is the e-mail address to send messages to. jgmusicgroup@aol.com

$email_to = 'jgmusicgroup@aol.com';

// email_subject is the subject of the e-mail

$email_subject = 'TheLoungeKatzBand.com: Web Contact Submission';



			$mailer = <<<HERE

Name:  

$name



Email:  

$email



Phone:

$phone



Message:

$message

HERE;



			mail($email_to, $email_subject, $mailer, "From: $email\r\n", "-f".$email);

			echo $response;

			

	} else {

		echo "<span style='color: #BBCCDD;  font-weight: bold;'>Your e-mail address appears invalid. Please enter it again.</span>";

	}

}

?>



<script language="JavaScript">

<!-- // hide

function validate(o_form)

{

	with (o_form)

	{

		if (name.value == "") { alert("Please enter your Name."); return false; }

		if (email.value == "") { alert("Please enter your E-mail."); return false; }

		if (phone.value == "") { alert("Please enter your Phone Number."); return false; }

		if (message.value == "") { alert("Please enter your Message."); return false; }

		return true;

	}

}

// hide -->

</script>





 

<style type="text/css">

<!--

 input

{

 font-size: 12px;

 background-color: #CCCCCC;

 border: 1px solid #666666;

}



.submit input

{

color: #000;

background: #cccccc;

border: 1px outset #666666;

}



TEXTAREA {

 font-size: 12px;

 background-color: #CCCCCC;

 border: 1px solid #666666;

}



//-->



</style>





<center>

<form action="<?=$PHP_SELF?>" method="POST">

<table border="0" cellspacing="6" cellpadding="0" id="form_table" style="color: #FFFFFF;">

	<tr><td colspan="2" align="left">Fill-in form below to contact us.</td></tr>

	<tr>

		<td width="20%" align="left">Name:</td>

		<td align="left">&nbsp;<input type="text" name="name" size="25" value=""></td>

	<tr>



		<td width="20%" align="left">E-mail:</td>

		<td align="left">&nbsp;<input type="text" name="email" size="25" value=""></td>

	</tr>

	<tr>

		<td width="20%" align="left">Phone:</td>

		<td align="left">&nbsp;<input type="text" name="phone" size="25" value=""></td>

	</tr>

	<tr>

		<td colspan="2">Please enter your message in the space below:</td>

	</tr>

	<tr>

		<td colspan="2"><textarea name="message" rows="4" cols="45"></textarea></td>

	</tr>

	<tr>

		<td colspan="2" align="right"><input type="submit" name="dosubmit" value="Submit" onclick="return validate(this.form);"></td>



	</tr>

</table>

</form>

</center>

