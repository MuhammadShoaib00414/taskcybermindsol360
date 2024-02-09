<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OtpUser extends Model
{
    use HasFactory;
    protected $table = 'otp_users';

    protected $fillable = [
        'email',
        'email_otp',
        'phone_otp',
    ];
}