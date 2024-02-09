<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
	<link rel="apple-touch-icon" sizes="76x76" href="assets/img/favicon.ico">

	<title>The Head of Hunter 360 Task</title>

	<meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />
    <meta name="viewport" content="width=device-width" />

	<link rel="apple-touch-icon" sizes="76x76" href="assets/img/apple-icon.png" />
	<link rel="icon" type="image/png" href="assets/img/favicon.png" />

	<!--     Fonts and icons     -->
	<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons" />
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" />

	<!-- CSS Files -->
	<link href="asset/css/bootstrap.min.css" rel="stylesheet" />
	<link href="asset/css/material-bootstrap-wizard.css" rel="stylesheet" />

	<!-- CSS Just for demo purpose, don't include it in your project -->
	<link href="asset/css/demo.css" rel="stylesheet" />
    <style>
        .info-text .text-style {
        text-align: center;
        font-weight: 500;
        width: 100%;
        width: 1;
        max-width: 545px;
        margin: auto;
        margin-bottom: 10px;
        margin-top: 20px;
        font-style: italic;

    }
    a#resendEmailOTP {
        color: green;
        font-size: 15px;
        font-weight: 600;
        position: relative;
        top: 11px;
        width: 100%;
        margin-left: 20px;
    }
    </style>
</head>

<body>
	<div class="image-container set-full-height" style="background-image: url('asset/img/wizard-profile.jpg')">

		<!--  Made With Material Kit  -->
		<a href="http://demos.creative-tim.com/material-kit/index.html?ref=material-bootstrap-wizard" class="made-with-mk">
			<div class="brand">MK</div>
			<div class="made-with">Made with <strong>Material Kit</strong></div>
		</a>

	    <!--   Big container   -->
	    <div class="container">
	        <div class="row">
		        <div class="col-sm-8 col-sm-offset-2">
		            <!--      Wizard container        -->
		            <div class="wizard-container">
		                <div class="card wizard-card" data-color="green" id="wizardProfile">
		                    <form action="" method="">
		                <!--        You can switch " data-color="purple" "  with one of the next bright colors: "green", "orange", "red", "blue"       -->

		                    	<div class="wizard-header">
		                        	<h3 class="wizard-title">
		                        	   Build Your Profile
		                        	</h3>
									<h5>This information will let us know more about you.</h5>
		                    	</div>
								<div class="wizard-navigation">
									<ul>
			                            <li><a href="#about" data-toggle="tab">User Information</a></li>
			                            <li><a href="#account" data-toggle="tab">Verification OTP</a></li>

			                        </ul>
								</div>

		                        <div class="tab-content">
                                    <div id="success-message" class="alert alert-danger" style="display:none ;"></div>
                                    <div id="error-message" class="alert alert-danger" style="display:none ;"></div>


 									 <div class="tab-pane" id="about">
		                              <div class="row">
		                                	<h4 class="info-text"> Let's start with the basic information </h4>
		                                	<div class="col-sm-6">
												<div class="input-group">
													<span class="input-group-addon">
														<i class="material-icons">email</i>
													</span>
													<div class="form-group label-floating">
			                                            <label class="control-label">Email <small>(required)</small></label>
			                                            <input name="email" type="email" class="form-control">
			                                        </div>
												</div>

												<div class="input-group">
													<span class="input-group-addon">
														<i class="material-icons">face</i>
													</span>
													<div class="form-group label-floating">
			                                          <label class="control-label">Name <small>(required)</small></label>
			                                          <input name="firstname" type="text" class="form-control">
			                                        </div>
												</div>

		                                	</div>
		                                	<div class="col-sm-6">

		                                    	<div class="form-group label-floating">
		                                        	<label class="control-label">Country</label>
	                                        		<select class="form-control" name="country" id="country">
                                                        @foreach($countries as $country)
                                                        <option value="{{ $country->id }}">{{ $country->name }}</option>
                                                    @endforeach
		                                        	</select>
		                                    	</div>
												<div class="form-group label-floating">
		                                        	<label class="control-label">Gender</label>
	                                        		<select class="form-control" name="gender" id="gender">
														<option disabled="" selected=""></option>
	                                                	<option value="male"> Male </option>
	                                                	<option value="female"> Female </option>
	                                                	<option value="other"> Other </option>

		                                        	</select>
		                                    	</div>
		                                	</div>
                                            <div class="col-sm-6">

		                                    	<div class="form-group label-floating">
		                                        	<div class="input-group">
                                                        <span class="input-group-addon">
                                                            <i class="material-icons">phone</i>
                                                        </span>
                                                        <div class="form-group label-floating">
                                                            <label class="control-label"> Phone Number<small> (required)</small></label>
                                                            <input name="phone" type="number" class="form-control" required>
                                                          </div>
                                                    </div>

		                                    	</div>

		                                	</div>


		                            	</div>
		                            </div>
		                            <div class="tab-pane" id="account">
		                                <h4 class="info-text text-style"> Enter the verification code we just sent you on your email address and Phone Number. </h4>
		                                <div class="row">
                                            <div class="col-sm-12">


												<div class="input-group">
													<span class="input-group-addon">
														<i class="material-icons">pin</i>
													</span>
													<div class="form-group label-floating">
													  <label class="control-label">OTP For Phone Number<small> (required)</small></label>
													  <input name="phone_otp" type="text" class="form-control">
													</div>

												</div>
		                                	</div>
                                            <div class="col-sm-12">
												<div class="input-group">
													<span class="input-group-addon">
														<i class="material-icons">pin</i>
													</span>
													<div class="form-group label-floating">
													  <label class="control-label">OTP For Email<small> (required)</small></label>
													  <input name="email_otp" type="text" class="form-control">
													</div>

												</div>
                                                <span class="text-right"><a href=""  id="resendEmailOTP">Resend OTP</a></span>
		                                	</div>



		                                </div>
		                            </div>

		                        </div>
		                        <div class="wizard-footer">
		                            <div class="pull-right">
		                                <input type='button' class='btn btn-next btn-fill btn-success btn-wd' name='next' value='Next' />
		                                <input type='button' class='btn btn-finish btn-fill btn-success btn-wd' name='finish' value='Verify' />
		                            </div>

		                            <div class="pull-left">
		                                <input type='button' class='btn btn-previous btn-fill btn-default btn-wd' name='previous' value='Previous' />
		                            </div>
		                            <div class="clearfix"></div>
		                        </div>
		                    </form>
		                </div>
		            </div> <!-- wizard container -->
		        </div>
	        </div><!-- end row -->
	    </div> <!--  big container -->

        <div class="footer">
	        <div class="container text-center">

	        </div>
	    </div>

	</div>

</body>
	<!--   Core JS Files   -->
    <script src="asset/js/jquery-2.2.4.min.js" type="text/javascript"></script>
	<script src="asset/js/bootstrap.min.js" type="text/javascript"></script>
	<script src="asset/js/jquery.bootstrap.js" type="text/javascript"></script>

	<!--  Plugin for the Wizard -->
	<script src="asset/js/material-bootstrap-wizard.js"></script>

    <!--  More information about jquery.validate here: http://jqueryvalidation.org/	 -->
	<script src="asset/js/jquery.validate.min.js"></script>

</html>
<!-- Your Blade View File -->

{{-- <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script> --}}

<script>
    $(document).ready(function () {
        $('.btn-next').click(function () {
            var email = $('input[name="email"]').val();
            var firstname = $('input[name="firstname"]').val();
            var country = $('select[name="country"]').val();
            var gender = $('select[name="gender"]').val();
            var phone = $('select[name="phone"]').val();

            $.ajax({
                type: 'POST',
                url: '/api/saveotpdata',
                data: {
                    email: email,
                    firstname: firstname,
                    country: country,
                    gender: gender,
                    phone: phone,
                    _token: '{{ csrf_token() }}'
                },
                success: function (data) {
                    var basicInfo = {
                    email: email,
                    firstname: firstname,
                    country: country,
                    gender: gender,
                    phone: phone
                };

                localStorage.setItem('basicInfo', JSON.stringify(basicInfo));

                    // alert('User data saved successfully!');
                    // Add any other actions you want to perform on success
                },
                error: function (error) {
                    // $('#error-message').text('Error: ' + error.message).show();
                    // alert('Error saving user data.');
                    // Handle error cases
                }
            });
        });
    });

    $(document).ready(function () {
    $('.btn-finish').click(function () {
        var emailOtp = $('input[name="email_otp"]').val();
        var phoneOtp = $('input[name="phone_otp"]').val();
        // Retrieve user data from the session
        // Combine basic information with OTP data
        var basicInfo = JSON.parse(localStorage.getItem('basicInfo'));
        if (!basicInfo) {
            alert('Basic information not found in local storage.');
            return;
        }

        var requestData = {
            firstname: basicInfo.firstname,
            email: basicInfo.email,
            country: basicInfo.country,
            phone: basicInfo.phone,
            gender: basicInfo.gender,
            email_otp: emailOtp,
            phone_otp: phoneOtp,
            _token: '{{ csrf_token() }}'
        };
        $.ajax({
            type: 'POST',
            url: '/api/verifyOTP',
            data: requestData,
            success: function (data) {
                window.location.href = 'home';
                $('#success-message').text('success: ' + 'OTP verified and data saved successfully!').show();
                // alert('OTP verified and data saved successfully!');
                // Add any other actions you want to perform on success
            },
            error: function (error) {
                console.log(error);
                $('#error-message').text('Error: ' + 'Invalid OTP').show();
                // alert('Error verifying OTP and saving data.');
                // Handle error cases
            }
        });
    });
});


$(document).ready(function() {
    $('#resendEmailOTP').click(function(e) {
        e.preventDefault();
        var basicInfo = JSON.parse(localStorage.getItem('basicInfo'));
        if (!basicInfo) {
            alert('Basic information not found in local storage.');
            return;
        }

        var requestData = {
            firstname: basicInfo.firstname,
            email: basicInfo.email,
        };

        // Uncomment this line if you want to use the 'email' variable
        // var email = $('#email').val();

        $.ajax({
            url: '/api/resend-otp',
            type: 'POST',
            data: requestData,  // Use 'requestData' instead of 'email'
            success: function(response) {

                if (response.success) {
                    $('#success-message').text('Success: New OTP sent successfully!').show();
                } else {
                    $('#error-message').text('Error: Failed to resend OTP').show();
                }
            },
            error: function(xhr, status, error) {
                $('#error-message').text('Error: Failed to resend OTP').show();
            }
        });
    });
});


</script>

