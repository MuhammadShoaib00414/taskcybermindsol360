<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Carbon\Carbon;
use App\Models\Subscription; // Replace with your User model
use App\Models\User; // Replace with your User model
use App\Mail\TrialExpirationNotification;
use Illuminate\Support\Facades\Mail;
class NotifyTrialExpiration extends Command
{

    protected $signature = 'notify:trial-expiration';
    protected $description = 'Notify users whose trial is about to expire in 2 days';

    // php artisan notify:trial-expiration
    /**
     * Execute the console command.
     */
    public function handle()
{
    $twoDaysBefore = Carbon::now()->addDays(2);
    $sevenDaysAfter = Carbon::now()->addDays(7);

    $subscriptions = Subscription::where('ends_at', '>', Carbon::now())
                    ->where('ends_at', '<=', $sevenDaysAfter)
                    // ->whereNull('trial_notification_sent') // Check if notification was sent
                    ->get();

    foreach ($subscriptions as $subscription) {
        $user = User::find($subscription->user_id);

        if ($user) {
            // Send email notification to user
            Mail::to($user->email)->send(new TrialExpirationNotification($user));

            // Mark subscription as notified to avoid sending multiple emails
            $user->update(['trial_notification_sent' => true]);

            // If you also want to mark the user as notified (in case the field is in the User model)
            // $user->update(['trial_notification_sent' => true]);
        }
    }

    $this->info('Notification emails sent to users with expiring trials.');
}

}
