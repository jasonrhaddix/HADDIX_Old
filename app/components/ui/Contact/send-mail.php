<?php
	
	if ($_SERVER["REQUEST_METHOD"] == "POST") {
		
		$data = json_decode(file_get_contents('php://input'), true);
	
		$fname = $data["firstName"];
		$lname = $data["lastName"];

		$name = $fname . " " . $lname;
		
		$email = $data["email"];
		$message = trim($data["message"]);
		
		
		if ( empty($name) OR empty($message) OR empty($email) ) {
			http_response_code(400);
			exit;
		}


		$recipient = "jasonrhaddix@gmail.com";

		$subject = "New Message from $name";

		$email_content = "Name:\n" . $name . "\n\n";
		$email_content .= "Email:\n" . $email . "\n\n";
		$email_content .= "Message:\n" . $message . "\n";
		
		$email_headers = "MIME-Version: 1.0" . "\r\n";
		$email_headers .= "Content-type: text/plain; charset=iso-8859-1" . "\r\n";
		$email_headers .= "From: HADDIX Site <info@jasonrhaddix.com>" . "\r\n" .
		"Reply-To: HADDIX Site <info@jasonrhaddix.com>" . "\r\n" .
		"X-Mailer: PHP/" . phpversion();
		

		// Send the email.
		if ( mail($recipient, $subject, $email_content, $email_headers) ) {
			http_response_code(200);
		} else {
			http_response_code(500);
		}

	} else {
		http_response_code(403);
	}

?> 