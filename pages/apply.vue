<script setup>
import { ref, onMounted } from 'vue'
import { useMainJS } from '../stores/main.js'
const mainStore =  useMainJS();

onMounted(() => {

})

</script>

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
                        <input
                            v-model="mainStore.request_a_quote.first_name"
                            class="form-text broker-form-text"
                            type="text"
                            placeholder="Name (required)"
                            required
                        />
                        <input
                            v-model="mainStore.request_a_quote.last_name"
                            class="form-text broker-form-text"
                            type="text"
                            placeholder="Last name (required)"
                            required
                        />
                    </div>
                    <div class="form-group">
                        <input
                            v-model="mainStore.request_a_quote.email"
                            class="form-email broker-form-email"
                            type="email"
                            placeholder="Email (required)"
                            required
                        />
                        <input
                            v-model="mainStore.request_a_quote.phone"
                            class="form-tel broker-form-tel"
                            type="tel"
                            placeholder="Phone number (required)"
                            required
                        />
                    </div>
                    <div class="form-group">
                        <input
                            v-model="mainStore.request_a_quote.property_state"
                            class="form-text property-form-text"
                            type="text"
                            placeholder="Property State (required)"
                            required
                        />
                    </div>
                    <div class="form-group">
                        <select
                            v-model="mainStore.request_a_quote.loan_program"
                            class="option-selection"
                            required
                        >
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
                        <textarea
                            v-model="mainStore.request_a_quote.loan_purpose"
                            class="loan-purpose"
                            placeholder="e.g., Rate/Term Refinance, Cash-out, etc. Please Complete if Refinance or Other."
                        ></textarea>
                    </div>
                    <div class="default-input">
                        <label class="loan-heading" for="loan-purpose">Describe the property type (required)</label>
                        <textarea
                            v-model="mainStore.request_a_quote.property_type"
                            class="loan-purpose"
                            placeholder="e.g., SFR, Land, Commercial, etc."
                        ></textarea>
                    </div>
                    <div class="form-group">
                        <select
                            v-model="mainStore.request_a_quote.close_time"
                            class="option-selection"
                            required
                        >
                            <option value="" disabled selected>Request a Close Time</option>
                            <option value="5 Days">5 Days</option>
                            <option value="8 Days">8 Days</option>
                            <option value="14 Days">14 Days</option>
                            <option value="30 Days">30 Days</option>
                            <option value="More Than 30 Days">More Than 30 Days</option>
                        </select>
                    </div>
                    <textarea
                        v-model="mainStore.request_a_quote.deal_summary"
                        class="deal-summary"
                        placeholder="Describe the deal summary"
                        required
                    ></textarea>
                    <div class="form-group">
                        <input
                            v-model="mainStore.request_a_quote.hear_about_us"
                            class="form-text hear-text"
                            type="text"
                            placeholder="How Did You Hear About Us? (required)"
                        />
                    </div>
                    <span v-if="mainStore.request_a_quote_error" class="text-danger fw-bold">{{ mainStore.request_a_quote_error }}</span>
                    <span v-if="mainStore.request_a_quote_message" class="text-success fw-bold">{{ mainStore.request_a_quote_message }}</span>
                    <span class="dark-btn submit-button" @click="!mainStore.request_a_quote_loading && mainStore.submitRequestAQuote()">SUBMIT <div v-if="mainStore.request_a_quote_loading" class="spinner-border text-light spinner-button"></div></span>
                </form>

            </div>
        </div>
    </div>
</section>
</template>