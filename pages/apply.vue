<template>
<section class="apply-section">
    <div class="container">
        <div class="default-parent apply-parent">
            <div class="default-description apply-description">
                <h1 class="default-heading apply-heading">
                    Request A Quote
                </h1>
                <p class="apply-paragraph default-paragraph">
                    You’ve come to the right place for your funding needs. Tuttle & Company provides private money
                    and commercial financing for investment properties. We offer creative and fast loans for
                    non-owner occupied residential, commercial, mixed-use, construction, land, acquisition and
                    development, etc. To see more of what we can do,<a class="default-link" href="/index">visit
                        our programs page.</a><br>
                    To begin the loan submission process, fill out this form and one of our loan agents will take it
                    from there. Or, call either of our offices for an expedited submission and response. Please
                    complete the form thoroughly so that we can attend to your needs with more clarity.
                </p>
                
                <img src="~/assets/images/girl-house.png" alt="">
                <div class="contact">
                    <h1 class="common-heading">CONTACT</h1>
                    <p>+1 (555) 555-5555 <span>info@capitalkeylending.com</span></p>
                </div>
            </div>
            <div class="form-parent apply-form">
                <h3 class="form-heading apply-heading">Apply now and we will get in touch</h3>
                <form class="default-form">
                    <div class="form-group">
                        <input class="form-text broker-form-text" type="text" placeholder="Name (required)"
                            required>
                        <input class="form-text broker-form-text" type="text" placeholder="Last name (required)"
                            required>
                    </div>
                    <div class="form-group">
                        <input class="form-email  broker-form-email" type="email" placeholder="Email (required)"
                            required>
                        <input class="form-tel  broker-form-tel" type="tel" placeholder="Phone number (required)"
                            required>
                    </div>
                    <div class="form-group">
                        <input class="form-text property-form-text" type="text"
                            placeholder="Property State (required)" required>
                    </div>
                    <div class="form-group">
                        <select class="option-selection" required>
                            <option value="" disabled selected>Select a Loan Program</option>
                            <option value="Purchase">Purchase</option>
                            <option value="Refinance">Refinance</option>
                            <option value="Construction">Construction</option>
                            <option value="Land">Land</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div class="default-input">
                        <label class="loan-heading" for="loan-purpose">Describe the purpose of loan.</label>
                        <textarea class="loan-purpose"
                            placeholder="e.g., Rate/Term Refinance, Cash-out, etc. Please Complete if Refinance or Other."></textarea>
                    </div>
                    <div class="default-input">
                        <label class="loan-heading" for="loan-purpose">Describe the property type (required)</label>
                        <textarea class="loan-purpose" placeholder="e.g., SFR, Land, Commercial, etc."></textarea>
                    </div>
                    <div class="form-group">
                        <select class="option-selection" requried>
                            <option value="" disabled selected>Request a Close Time</option>
                            <option value="days">5 Days</option>
                            <option value="days">8 Days</option>
                            <option value="days">14 Days</option>
                            <option value="days">30 Days</option>
                            <option value="days">More Than 30 Days</option>
                        </select>
                    </div>
                    <textarea class="deal-summary" placeholder="Describe the deal summary" required></textarea>
                    <div class="form-group">
                        <input class="form-text hear-text" type="text"
                            placeholder="How Did You Hear About Us? (required)">
                    </div>
                    <button class="dark-btn">Submit</button>
                </form>

            </div>
        </div>
    </div>
</section>
</template>