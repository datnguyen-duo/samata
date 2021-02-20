<?php
    $to = "wordpressdeveloper2020@gmail.com";
    $to = "samatahealth1@mailinator.com";
    $to = "elizabeth@samatahealth.com";
    $message = '<table style="background: #ffffff; margin: 0 auto;" width="100%" cellspacing="0" cellpadding="0">
                <thead>
                    <tr>
                        <td style="padding: 20px; text-align: center;" colspan="2">
                            <img src="https://samatahealth.com/assets/Samata%20Health_logo.svg" alt="Samatahealth" width="235" height="auto" />
                        </td>
                    </tr>
                </thead>
                <tbody>';
    if( $_POST['action'] == 'test_mail' ) {
        $subject = "SamataHealth Test Mail";
        $message .= '<tr>
                        <td style="width: 20%; padding: 10px 20px;"><strong>Name :</strong></td>
                        <td style="width: 80%; padding: 10px 20px; text-align: left;">'.$_POST['fname'].'</td>
                    </tr>
                    <tr style="background-color: #cfdbe4;">
                        <td style="width: 20%; padding: 10px 20px;"><strong>Email: </strong></td>
                        <td style="width: 80%; padding: 10px 20px; text-align: left;">'.$_POST['email'].'</td>
                    </tr>';
    } else if( $_POST['action'] == 'contact_for_employers' ) {
        $subject = "SamataHealth - Contact For Employers";
        $message .= '<tr>
                        <td style="width: 20%; padding: 10px 20px;"><strong>First Name :</strong></td>
                        <td style="width: 80%; padding: 10px 20px; text-align: left;">'.$_POST['fname'].'</td>
                    </tr>
                    <tr>
                        <td style="width: 20%; padding: 10px 20px;"><strong>Last Name :</strong></td>
                        <td style="width: 80%; padding: 10px 20px; text-align: left;">'.$_POST['lname'].'</td>
                    </tr>
                    <tr>
                        <td style="width: 20%; padding: 10px 20px;"><strong>Email: </strong></td>
                        <td style="width: 80%; padding: 10px 20px; text-align: left;">'.$_POST['email'].'</td>
                    </tr>
                    <tr>
                        <td style="width: 20%; padding: 10px 20px;"><strong>Comapny Name: </strong></td>
                        <td style="width: 80%; padding: 10px 20px; text-align: left;">'.$_POST['company'].'</td>
                    </tr>
                    <tr>
                        <td style="width: 20%; padding: 10px 20px;"><strong>Message: </strong></td>
                        <td style="width: 80%; padding: 10px 20px; text-align: left;">'.$_POST['message'].'</td>
                    </tr>';
    } else if( $_POST['action'] == 'contact_for_therapists' ) {
        $subject = "SamataHealth - Contact For Therapists";
        $message .= '<tr>
                        <td style="width: 20%; padding: 10px 20px;"><strong>First Name :</strong></td>
                        <td style="width: 80%; padding: 10px 20px; text-align: left;">'.$_POST['fname'].'</td>
                    </tr>
                    <tr>
                        <td style="width: 20%; padding: 10px 20px;"><strong>Last Name :</strong></td>
                        <td style="width: 80%; padding: 10px 20px; text-align: left;">'.$_POST['lname'].'</td>
                    </tr>
                    <tr>
                        <td style="width: 20%; padding: 10px 20px;"><strong>Email: </strong></td>
                        <td style="width: 80%; padding: 10px 20px; text-align: left;">'.$_POST['email'].'</td>
                    </tr>
                    <tr>
                        <td style="width: 20%; padding: 10px 20px;"><strong>Message: </strong></td>
                        <td style="width: 80%; padding: 10px 20px; text-align: left;">'.$_POST['message'].'</td>
                    </tr>';
    } else if( $_POST['action'] == 'contact_for_individuals' ) {
        $subject = "SamataHealth - Contact For Individuals";
        $message .= '<tr>
                        <td style="width: 20%; padding: 10px 20px;"><strong>First Name :</strong></td>
                        <td style="width: 80%; padding: 10px 20px; text-align: left;">'.$_POST['fname'].'</td>
                    </tr>
                    <tr>
                        <td style="width: 20%; padding: 10px 20px;"><strong>Last Name :</strong></td>
                        <td style="width: 80%; padding: 10px 20px; text-align: left;">'.$_POST['lname'].'</td>
                    </tr>
                    <tr>
                        <td style="width: 20%; padding: 10px 20px;"><strong>Email: </strong></td>
                        <td style="width: 80%; padding: 10px 20px; text-align: left;">'.$_POST['email'].'</td>
                    </tr>
                    <tr>
                        <td style="width: 20%; padding: 10px 20px;"><strong>Message: </strong></td>
                        <td style="width: 80%; padding: 10px 20px; text-align: left;">'.$_POST['message'].'</td>
                    </tr>';
    } else if( $_POST['action'] == 'footer_home_form' ) {
        $subject = "SamataHealth - Join the list";
        $message .= '<tr>
                        <td style="width: 20%; padding: 10px 20px;"><strong>First Name :</strong></td>
                        <td style="width: 80%; padding: 10px 20px; text-align: left;">'.$_POST['fname'].'</td>
                    </tr>
                    <tr>
                        <td style="width: 20%; padding: 10px 20px;"><strong>Email: </strong></td>
                        <td style="width: 80%; padding: 10px 20px; text-align: left;">'.$_POST['email'].'</td>
                    </tr>';
    } else if( $_POST['action'] == 'contact_for_apply_now' ) {
        $subject = "SamataHealth - Apply Now";
        $message .= '<tr>
                        <td style="width: 20%; padding: 10px 20px;"><strong>First Name :</strong></td>
                        <td style="width: 80%; padding: 10px 20px; text-align: left;">'.$_POST['fname'].'</td>
                    </tr>
                    <tr>
                        <td style="width: 20%; padding: 10px 20px;"><strong>Last Name :</strong></td>
                        <td style="width: 80%; padding: 10px 20px; text-align: left;">'.$_POST['lname'].'</td>
                    </tr>
                    <tr>
                        <td style="width: 20%; padding: 10px 20px;"><strong>Email: </strong></td>
                        <td style="width: 80%; padding: 10px 20px; text-align: left;">'.$_POST['email'].'</td>
                    </tr>
                    <tr>
                        <td style="width: 20%; padding: 10px 20px;"><strong>Location of Therapy Practice : </strong></td>
                        <td style="width: 80%; padding: 10px 20px; text-align: left;">'.$_POST['location_therapy'].'</td>
                    </tr>
                    <tr>
                        <td style="width: 20%; padding: 10px 20px;"><strong>License Type : </strong></td>
                        <td style="width: 80%; padding: 10px 20px; text-align: left;">'.$_POST['licence_type'].'</td>
                    </tr>
                    <tr>
                        <td style="width: 20%; padding: 10px 20px;"><strong>License Number : </strong></td>
                        <td style="width: 80%; padding: 10px 20px; text-align: left;">'.$_POST['licence_number'].'</td>
                    </tr>
                    <tr>
                        <td style="width: 20%; padding: 10px 20px;"><strong>Link to Website : </strong></td>
                        <td style="width: 80%; padding: 10px 20px; text-align: left;">'.$_POST['link_website'].'</td>
                    </tr>
                    <tr>
                        <td style="width: 20%; padding: 10px 20px;"><strong>Tell us a bit about your practice : </strong></td>
                        <td style="width: 80%; padding: 10px 20px; text-align: left;">'.$_POST['practice'].'</td>
                    </tr>';
    } 
    $message .= '</tbody>
                <tfoot>
                    <tr>
                        <td style="padding: 20px; background: #231F20;" colspan="2">
                            <p style="text-align: center; color: #fff; font-size: 14px; margin: 10px 0;">
                            Copyright © 2020 Samata Health. All Rights Reserved
                            </p>
                        </td>
                    </tr>
                </tfoot>
            </table>';
    $header = "From:elizabeth@samatahealth.com \r\n";
    $header .= "MIME-Version: 1.0\r\n";
    $header .= "Content-type: text/html\r\n";
    $retval = mail ($to,$subject,$message,$header);
    if( $retval == true ) {
       echo "Message sent successfully...";
    } else {
       echo "Message could not be sent...";
    }
?>