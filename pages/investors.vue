<script setup>
import { ref, onMounted } from 'vue'
import { useMainJS } from '../stores/main.js'
const mainStore =  useMainJS();

onMounted(() => {

})

</script>


<template>
    <section class="apply-section investor-section">
        <div class="container">
            <div class="default-parent apply-parent">
                <div class="default-description investor-description">
                    <h1 class="default-heading apply-heading">
                        Become An Investor
                    </h1>
                    <h2 class="default-description investor-heading">PRIVATE MONEY INVESTING</h2>
                    <p class="apply-paragraph default-paragraph">
                        We are continually searching for private money investors that strive to outperform the current
                        benchmark. Market volatility has made many look for different avenues to invest, some simpler
                        than others. Trust deed instruments, and the underlying property value, provides greater
                        security when compared to the bulk of the financial markets.
                    </p>
                    <h2 class="investor-heading default-description">
                        HIGH YIELD
                    </h2>
                    <p class="apply-paragraph default-paragraph">
                        Our programs can deliver returns greater than the current equities market, debt market, and many
                        managed portfolios. With increased focus on emerging markets and derivative instruments,
                        diversify with something local and manageable.
                    </p>
                    <h2 class="investor-heading default-description">
                        SECURITY OF CAPITAL
                    </h2>
                    <p class="apply-paragraph default-paragraph">
                        Every sourced borrower is qualified by our standards of underwriting and creditworthiness. Along
                        with this, the mortgage is backed by the underlying property’s value to afford the utmost
                        security for you, the investor.
                    </p>
                    <img src="~/assets/images/investor-girl-image.png" alt="">
                </div>
                <div class="form-parent apply-form">
                    <h3 class="form-heading apply-heading">Investor Inquiry</h3>

                    {{ mainStore.investor_inquiry }}
                    <form class="default-form">
                        <div class="form-group">
                            <input v-model="mainStore.investor_inquiry.first_name" class="form-text broker-form-text" type="text" placeholder="First name (required)"
                                required>
                            <input v-model="mainStore.investor_inquiry.last_name" class="form-text broker-form-text" type="text" placeholder="Last name (required)"
                                required>
                        </div>
                        <div class="form-group">
                            <input v-model="mainStore.investor_inquiry.email" class="form-email  broker-form-email" type="email" placeholder="Email (required)"
                                required>
                            <input v-model="mainStore.investor_inquiry.phone" class="form-tel  broker-form-tel" type="tel" placeholder="Phone number (required)"
                                required>
                        </div>
                        <div class="form-group">
                            <input v-model="mainStore.investor_inquiry.property_state" class="form-text property-form-text" type="text"
                                placeholder="Property State (required)" required>
                        </div>
                        <div class="default-input">
                            <label class="loan-heading" for="loan-purpose">Describe the property type (required)</label>
                            <textarea v-model="mainStore.investor_inquiry.purpose_of_loan" class="loan-purpose" placeholder="e.g., SFR, Land, Commercial, etc."></textarea>
                        </div>
                        <div class="default-label-form">
                            <label class="default-label" for="lien-position">Lien Position (required)</label>
                            <select v-model="mainStore.investor_inquiry.lien_position" class="option-selection" required>
                                <option value="" disabled selected>Select multiple options</option>
                                <option value="1st">1st</option>
                                <option value="2nd">2nd</option>
                            </select>
                        </div>
                        <div class="default-label-form">
                            <label class="default-label" for="lien-position">Term Limits (required)
                                <span class="default-label-sub-heading">Check length of acceptable loan terms.</span>
                            </label>
                            <select v-model="mainStore.investor_inquiry.term_limits" class="option-selection" required>
                                <option value="" disabled selected>Select an options</option>
                                <option value="months">3-6 Months</option>
                                <option value="months">6-12 Months</option>
                                <option value="months">12-18 Months</option>
                                <option value="months">2-4 Years</option>
                                <option value="months">4+ Years</option>
                            </select>
                        </div>
                        <div class="default-label-form">
                            <label class="default-label" for="lien-position">Return on Investment (required)
                                <span class="default-label-sub-heading">Pick lowest acceptable rate.</span>
                            </label>
                            <select v-model="mainStore.investor_inquiry.return_on_investment" class="option-selection" required>
                                <option value="" disabled selected>Select an option</option>
                                <option value="5%">5.00%</option>
                                <option value="">6.00%</option>
                                <option value="">7.00%</option>
                                <option value="">8.00%</option>
                                <option value="">9.00%</option>
                                <option value="">10.00%</option>
                                <option value="">11.00%</option>
                                <option value="12%">12.00%</option>
                            </select>
                        </div>
                        <div class="default-label-form">
                            <label class="default-label" for="lien-position">Loan-To-Value (required)
                                <span class="default-label-sub-heading">Pick highest acceptable LTV.</span>
                            </label>
                            <select v-model="mainStore.investor_inquiry.loan_to_value" class="option-selection" required>
                                <option value="" disabled selected>Select an option</option>
                                <option value="40%">40%</option>
                                <option value="50%">50%</option>
                                <option value="60%">60%</option>
                                <option value="65%">65%</option>
                                <option value="70%">70%</option>
                                <option value="75%">75%</option>
                                <option value="80%">80%</option>
                                <option value="85%">85%</option>
                            </select>
                        </div>
                        <div class="default-label-form">
                            <label class="default-label" for="lien-position">Loan Amount (required)
                                <span class="default-label-sub-heading">Provide your single transaction lending
                                    limit.</span>
                            </label>
                            <input v-model="mainStore.investor_inquiry.loan_amount" class="form-text broker-form-text" type="number" placeholder="$" required>
                        </div>

                        <div class="checkbox-group">Investment Participation (required)</div>

                        <div class="checkbox-form">
                            <input v-model="mainStore.investor_inquiry.investment_participation_mortgage" class="checkbox-input" type="checkbox" id="mortgage" name="participation" />
                            <label class="checkbox-label" for="mortgage">Mortgage / Trust Deed</label>
                        </div>

                        <div class="checkbox-form">
                            <input v-model="mainStore.investor_inquiry.investment_participation_equity" class="checkbox-input" type="checkbox" id="equity" name="participation" />
                            <label class="checkbox-label" for="equity">Equity / Joint Venture</label>
                        </div>
                        <div class="default-label-form">
                            <label class="default-label" for="lien-position">Fund Available (required)</label>
                            <input v-model="mainStore.investor_inquiry.fund_available" class="form-text broker-form-text" type="number" placeholder="$" required>
                        </div>
                        <div class="default-label-form">
                            <label class="default-label" for="lien-position">Availability of Funds (required)</label>
                            <select v-model="mainStore.investor_inquiry.availability_of_funds" class="option-selection" required>
                                <option value="" disabled selected>Select an option</option>
                                <option value="immediately">immediately</option>
                                <option value="one week">one week</option>
                                <option value="two week">two week</option>
                                <option value="one month or more">one month or more</option>
                            </select>
                        </div>
                        <div class="default-input">
                            <label class="loan-heading" for="loan-purpose">Describe the purpose of loan.</label>
                            <textarea v-model="mainStore.investor_inquiry.purpose_of_loan" class="loan-purpose"
                                placeholder="e.g., Rate/Term Refinance, Cash-out, etc. Please Complete if Refinance or Other."></textarea>
                        </div>

                        <textarea class="deal-summary" placeholder="Additional Information" v-model="mainStore.investor_inquiry.additional_details" required></textarea>
                        <div class="form-group">
                            <input v-model="mainStore.investor_inquiry.where_did_hear_about_us" class="form-text hear-text investor-hear" type="text"
                                placeholder="How Did You Hear About Us? (required)">
                        </div>

                        <span v-if="mainStore.investor_inquiry_error" class="text-danger fw-bold">{{ mainStore.investor_inquiry_error }}</span>
                        <span v-if="mainStore.investor_inquiry_message" class="text-success fw-bold">{{ mainStore.investor_inquiry_message }}</span>


                        <span class="dark-btn submit-button" @click="!mainStore.investor_inquiry_loading && mainStore.submitInvestorInquiry()">SUBMIT <div v-if="mainStore.investor_inquiry_loading" class="spinner-border text-light spinner-button"></div></span>


                    </form>

                </div>
            </div>
        </div>
    </section>
</template>