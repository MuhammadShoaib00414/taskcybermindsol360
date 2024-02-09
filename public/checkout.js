const stripe = Stripe("pk_test_51O9rjwHgAJ2a2cU6bxBBpmh3z11jZqTj0hkroRh2bA1eEsO89vzM0jBuxtE8E4aw20wf8XqJG5mFAA2S0gyUYlg600bekqVISk");

initialize();

// Create a Checkout Session as soon as the page loads
async function initialize() {
  try {
    const response = await fetch("/api/get-stripe-intent", {
      method: "GET",
    });

    if (!response.ok) {
      // Handle the error appropriately
      console.error("Error fetching Stripe intent:", response.statusText);
      return;
    }

    const jsonResponse = await response.json();
    console.log('Response from server:', jsonResponse);

    const { clientSecret } = jsonResponse;

    const checkout = await stripe.initEmbeddedCheckout({
      clientSecret,
    });

    // Mount Checkout
    checkout.mount('#checkout');
  } catch (error) {
    // Handle any other errors that might occur during the process
    console.error("Error during initialization:", error);
  }
}