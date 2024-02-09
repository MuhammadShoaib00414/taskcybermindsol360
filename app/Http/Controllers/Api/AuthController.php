<?php

namespace App\Http\Controllers\Api;

use App\Models\OtpUser;
use App\Models\User;
use Illuminate\Http\Request;
use App\Mail\VerificationCode;
use App\Http\Controllers\Controller;
use App\Models\Country;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Twilio\Rest\Client;
class AuthController extends Controller
{



    public function loginform()
    {
        $countries = Country::all(); // Assuming you have a 'countries' table and a Country model

        return view('loginform', compact('countries'));
    }

    public function saveOTPData(Request $request)
    {
        $data = $request->validate([
            'email' => 'required',
            'firstname' => 'required|string',
            'country' => 'required|string',
            'gender' => 'required|string',
            // 'phone' => 'required|string',
        ]);

        try {
            // Generate a random verification code
            $emailverificationCode = substr(str_shuffle('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'), 1, 6);
            $phoneverificationCode = substr(str_shuffle('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ09'), 1, 7);

            // Send the verification code via email
            Mail::to($data['email'])->send(new VerificationCode($emailverificationCode, 'Verification OTP'));

            // Send the verification code via WhatsApp using Twilio
            $this->sendWhatsAppMessage('whatsapp:+923024843414', 'Your OTP code Here. ' . $phoneverificationCode);

            // Save the data (email and verification code) in the database
            $otpUser = OtpUser::create([
                'email' => $data['email'],
                'email_otp' => $emailverificationCode,
                'phone_otp' => $phoneverificationCode,
            ]);

            return response()->json(['success' => true, 'message' => 'Verification code sent to your email and phone number']);
        } catch (\Illuminate\Database\QueryException $ex) {
            $errorMessage = 'Duplicate email: This email is already registered.';
            return response()->json(['success' => false, 'message' => $errorMessage]);
        }
    }



    private function sendWhatsAppMessage($recipientPhoneNumber, $messageBody)
    {
        $twilioSid = env('TWILIO_SID');
        $twilioToken = env('TWILIO_AUTH_TOKEN');
        $twilioPhoneNumber = env('TWILIO_PHONE_NUMBER'); // Use the Twilio WhatsApp number here

        $twilio = new Client($twilioSid, $twilioToken);

        try {
            $message = $twilio->messages->create(
                "whatsapp:" . $recipientPhoneNumber,
                [
                    "from" => "whatsapp:" . $twilioPhoneNumber,
                    "body" => $messageBody,
                ]
            );

            // Handle success (e.g., log or return response)
            return response()->json(['success' => true, 'message' => 'WhatsApp message sent successfully']);
        } catch (\Exception $e) {
            // Handle error (e.g., log or return error response)
            return response()->json(['success' => false, 'message' => 'Error sending WhatsApp message', 'error' => $e->getMessage()]);
        }
    }


// Example usage
public function verifyOTP(Request $request)
{

    $data = $request->validate([
        'email_otp' => 'required|string',
        'phone_otp' => 'required|string',

    ]);


   $matchopt = OtpUser::where('email', $request->email)
        ->where('email_otp', $data['email_otp'])
        ->where('phone_otp', $data['phone_otp'])
        ->first();

    if ($matchopt) {

        $user = User::create([
            'firstname' => $request->firstname,
            'email' => $request->email,
            'country' => $request->country,
            'gender' => $request->gender,
            'phone_otp' => $request->phone_otp,

        ]);

        // OTPs match, log in the user
        Auth::login($user);

        // Add any other actions you want to perform after successful login

        return response()->json(['success' => true, 'message' => 'successful']);

    } else {
        // OTPs do not match
        return response()->json(['success' => false, 'message' => 'Invalid OTPs'], 400);
    }

}
public function resendOTP(Request $request)
{
    // Retrieve the email from the request
    $email = $request->input('email');

    // Retrieve the user by email
    $user = OtpUser::where('email', $email)->first();

    if (!$user) {
        return response()->json(['success' => false, 'message' => 'User not found'], 404);
    }

    // Generate a new OTP
    $newEmailVerificationCode = substr(str_shuffle('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'), 1, 6);
    $newPhoneVerificationCode = substr(str_shuffle('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ09'), 1, 6);

    $this->sendWhatsAppMessage('whatsapp:+923024843414', 'Your OTP code Here. ' . $newPhoneVerificationCode);

    // Update the user's OTP codes in the database
    $user->update([
        'email_otp' => $newEmailVerificationCode,
        'phone_otp' => $newPhoneVerificationCode,
    ]);

    // Resend OTP to email
    Mail::to($email)->send(new VerificationCode($newEmailVerificationCode, 'Verification OTP'));

    // You can also resend OTP to phone if needed

    return response()->json(['success' => true, 'message' => 'New OTP sent']);
}

}
