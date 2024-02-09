<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\PaymentTransaction; // Update with your PaymentTransaction model
use App\Models\Subscription; // Update with your Subscription model
use Stripe\Stripe as StripeGateway;
use Stripe\StripeClient;
use Stripe\PaymentIntent;
use Stripe\Stripe;
use Stripe\Product;
class ProcessStripePayments extends Command
{
    protected $signature = 'stripe:process-payments';
    protected $description = 'Fetch payment details from Stripe after trial period ends';

    public function __construct()
    {
        parent::__construct();
    }
    public function handle()
    {
        // Set your Stripe secret key
        Stripe::setApiKey(env('STRIPE_SECRET'));

        $subscriptions = Subscription::where('ends_at', '<=', now())->get();

        foreach ($subscriptions as $subscription) {
            $stripeSubscriptionId = $subscription->subscription_id;

            // Retrieve invoices associated with the subscription
            $stripe = new StripeClient(env('STRIPE_SECRET'));
            $invoices = $stripe->invoices->all([
                'subscription' => $stripeSubscriptionId,
                'limit' => 100,
            ]);

            foreach ($invoices->data as $invoice) {
                // Fetch payment intents related to the invoice
                $paymentIntentId = $invoice->payment_intent;

                if ($paymentIntentId) {
                    $paymentIntent = $stripe->paymentIntents->retrieve($paymentIntentId);
                    // Create and save the payment transaction in your database
                    $payment = new PaymentTransaction();
                    $payment->user_id = $subscription->user_id;
                    $payment->payment_intent_id = $paymentIntent->id;
                    $payment->object = $paymentIntent->object;
                    // Map other necessary payment details accordingly
                    // $payment->amount = $lastPaymentIntent['amount'];
                    // $payment->amount_capturable = $lastPaymentIntent['amount_capturable'];
                    // $payment->amount_details = $lastPaymentIntent['amount_details'];
                    // $payment->amount_received = $lastPaymentIntent['amount_received'];
                    // $payment->status = $lastPaymentIntent['status'];
                    // $payment->type = 'stripe';
                    // // $subscription->couponcode =  $coupon_code;
                    // // Assuming $subscription is an existing object
                    // if ($coupon_code === null) {
                    //     $payment->couponcode = null;
                    // } else {
                    //     $payment->couponcode = $coupon_code;
                    // }
                    $payment->save();
                }
            }
        }
            $this->info('Stripe payment details processed.');

}

}
