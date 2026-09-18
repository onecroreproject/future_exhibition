<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Get raw POST data since React might send JSON, or check for form data
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    if (json_last_error() === JSON_ERROR_NONE && !empty($data)) {
        // Data is JSON
        $name = isset($data['name']) ? htmlspecialchars($data['name']) : '';
        $email = isset($data['email']) ? htmlspecialchars($data['email']) : '';
        $phone = isset($data['phone']) ? htmlspecialchars($data['phone']) : '';
        $visitorType = isset($data['visitorType']) ? htmlspecialchars($data['visitorType']) : '';
        $org = isset($data['org']) ? htmlspecialchars($data['org']) : '';
    } else {
        // Fallback to standard form POST
        $name = isset($_POST['name']) ? htmlspecialchars($_POST['name']) : '';
        $email = isset($_POST['email']) ? htmlspecialchars($_POST['email']) : '';
        $phone = isset($_POST['phone']) ? htmlspecialchars($_POST['phone']) : '';
        $visitorType = isset($_POST['visitorType']) ? htmlspecialchars($_POST['visitorType']) : '';
        $org = isset($_POST['org']) ? htmlspecialchars($_POST['org']) : '';
    }

    if (empty($name) || empty($email) || empty($phone)) {
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => "Name, Email, and Phone are required fields."]);
        exit;
    }

    $to = "futureexhibitions@gmail.com";
    $subject = "New Enquiry Form Submission - " . $name;
    
    $message = "You have received a new enquiry form submission.\n\n";
    $message .= "Full Name: " . $name . "\n";
    $message .= "Email: " . $email . "\n";
    $message .= "Phone / WhatsApp: " . $phone . "\n";
    $message .= "Visitor Type: " . $visitorType . "\n";
    if (!empty($org)) {
        $message .= "School / Organization: " . $org . "\n";
    }

    $headers = "From: noreply@" . $_SERVER['SERVER_NAME'] . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    if (mail($to, $subject, $message, $headers)) {
        http_response_code(200);
        echo json_encode(["status" => "success", "message" => "Your message has been sent successfully."]);
    } else {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Failed to send email. Please try again later."]);
    }
} else {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Method not allowed."]);
}
?>
