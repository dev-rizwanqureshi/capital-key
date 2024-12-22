<script setup>
import { ref, onMounted } from 'vue'

onMounted(() => {

})

</script>


<template>


    <section id="loan-advisor" class="loan-advisor-section">
        <div class="container">
            <div class="loan-advisor-parent">
                <div class="loan-advisor-description">
                    <h1 class="common-heading loan-advisor-heading">Efficient, swift, and reliable solutions</h1>
                    <p class="common-paragraph loan-advisor-paragraph">We make private real estate lending easy with
                        simple <br> loan programs
                        and
                        exceptional service
                    </p>

                    <div class="loan-advisor-user-information">
                        <p class="form-heading">Connect with a dedicated loan advisors now!</p>
                        <form class="form-section" action="action-page.php">
                            <input class="form-text" type="text" placeholder="Name and Last name">
                            <input class="form-email" type="email" placeholder="Email">
                            <input class="form-tel" type="tel" placeholder="Phone number">
                            <button class="dark-btn submit-button">SUBMIT</button>
                        </form>
                    </div>

                </div>


                <div class="loan-advisor-house">
                    <img src="~/assets/images/Group-house.png" alt="">
                </div>

            </div>
        </div>
        <div class="show-more-link">
            <a href="#">
                <img src="~/assets/images/down-arrow.png" alt="">
            </a>
        </div>
    </section>
    <section id="about-us" class="know-us-section">
        <div class="container">
            <div class="know-us-parent">
                <div class="know-us-img">
                    <img src="~/assets/images/design2.png" alt="">
                </div>
                <div class="heading">
                    <h1 class="common-heading">
                        Get to know us
                    </h1>
                    <img src="~/assets/images/Union.png" alt="">
                    <p class="common-paragraph"><span> Capital Key Lending</span> was established to meet the increasing
                        need for flexible real estate financing. Our loan programs offer credit solutions that enable
                        borrowers to leverage property values to implement their investment plans.
                    </p>


                    <p class="common-paragraph">Experienced real estate finance professionals lead our company with
                        backgrounds in residential mortgages, commercial mortgages, structured finance, and special
                        servicing. With over two decades of industry experience, our team has the expertise to support
                        the growth of your real estate investment business.
                    </p>
                </div>
                <div class="know-us-design-img">
                    <img src="~/assets/images/dsign3.png" alt="">
                </div>

            </div>
        </div>
    </section>
    <section id="loan-program" class="loan-program-section">
        <div class="container">
            <div class="heading2">
                <h1 class="common-heading">
                    Know our loan programs
                </h1>
            </div>

            <div class="loan-program-parent">

                <div class="loan-program">
                    <div class="loan-program-img">
                        <img src="~/assets/images/house-link.png" alt="">
                    </div>
                    <div class="loan-program-description">
                        <h3 class="common-heading">FIX & FLIP LOANS</h3>
                        <p>Short term loans for investors seeking to renovate properties to sell or refinance as
                            rentals.</p>
                        <div class="loan-program-points">
                            <img src="~/assets/images/point-image.png" alt="">
                            <p>SFR1-4, Condos, Townhomes</p>
                        </div>
                        <div class="loan-program-points">
                            <img src="~/assets/images/point-image.png" alt="">
                            <p>Up to 90% LTC & 75% ARV</p>
                        </div>
                        <div class="loan-program-points">
                            <img src="~/assets/images/point-image.png" alt="">
                            <p>Rates from 9.95%</p>
                        </div>
                        <div class="loan-program-points">
                            <img src="~/assets/images/point-image.png" alt="">
                            <p>660 Min. FICO</p>
                        </div>
                        <div class="loan-program-points">
                            <img src="~/assets/images/point-image.png" alt="">
                            <p>Loans from $100k to $3MM</p>
                        </div>
                        <div class="loan-program-points">
                            <img src="~/assets/images/point-image.png" alt="">
                            <p>Always 100% of rehab cost</p>
                        </div>
                        <div class="loan-program-points">
                            <img src="~/assets/images/point-image.png" alt="">
                            <p>Up to 24 month terms available</p>
                        </div>
                        <div class="loan-program-points">
                            <img src="~/assets/images/point-image.png" alt="">
                            <p>Non-recourse available</p>
                        </div>
                        <div class="loan-program-points">
                            <img src="~/assets/images/point-image.png" alt="">
                            <p>Foreign National up to 75% LTC</p>
                        </div>
                        <div class="loan-program-points">
                            <img src="~/assets/images/point-image.png" alt="">
                            <p>No U.S. Credit, Work Visa, or ITIN Required on Foreign National</p>
                        </div>
                    </div>
                </div>
                <div class="loan-program">
                    <div class="loan-program-img2">
                        <img src="~/assets/images/crain.png" alt="">
                    </div>
                    <div class="loan-program-description">
                        <h3 class="common-heading">CONSTRUCTION</h3>
                        <p>Construction loans for shovel-ready lots, teardown, or projects seeking to build &
                            retain the as a rental.</p>
                        <div class="loan-program-points">
                            <img src="~/assets/images/point-image.png" alt="">
                            <p>SFR 1-4 Only</p>
                        </div>
                        <div class="loan-program-points">
                            <img src="~/assets/images/point-image.png" alt="">
                            <p>Up to 85% LTC and 75% LTV</p>
                        </div>
                        <div class="loan-program-points">
                            <img src="~/assets/images/point-image.png" alt="">
                            <p>660 Min. FICO</p>
                        </div>
                        <div class="loan-program-points">
                            <img src="~/assets/images/point-image.png" alt="">
                            <p>Loans from $150k to $3MM</p>
                        </div>
                        <div class="loan-program-points">
                            <img src="~/assets/images/point-image.png" alt="">
                            <p>100% of construction cost</p>
                        </div>
                        <div class="loan-program-points">
                            <img src="~/assets/images/point-image.png" alt="">
                            <p>Interest-only loans, pay only on drawn funds​</p>
                        </div>
                        <div class="loan-program-points">
                            <img src="~/assets/images/point-image.png" alt="">
                            <p>Up to 24 month terms available</p>
                        </div>
                        <div class="loan-program-points">
                            <img src="~/assets/images/point-image.png" alt="">
                            <p>Non-recourse available</p>
                        </div>

                    </div>
                </div>
                <div class="loan-program">
                    <div class="loan-program-img3">
                        <img src="~/assets/images/key.png" alt="">
                    </div>
                    <div class="loan-program-description">
                        <h3 class="common-heading">BRIDGE</h3>
                        <p>Short-term loans for investors seeking a quick close refi on TCO & Stabilized
                            properties.</p>
                        <div class="loan-program-points">
                            <img src="~/assets/images/point-image.png" alt="">
                            <p>SFR1-4, Condos, Townhomes</p>
                        </div>
                        <div class="loan-program-points">
                            <img src="~/assets/images/point-image.png" alt="">
                            <p>Multifamily</p>
                        </div>
                        <div class="loan-program-points">
                            <img src="~/assets/images/point-image.png" alt="">
                            <p>TCO Build-To-Rent</p>
                        </div>
                        <div class="loan-program-points">
                            <img src="~/assets/images/point-image.png" alt="">
                            <p>Up 82.5% LTV</p>
                        </div>
                        <div class="loan-program-points">
                            <img src="~/assets/images/point-image.png" alt="">
                            <p>Rates from 9.95%</p>
                        </div>
                        <div class="loan-program-points">
                            <img src="~/assets/images/point-image.png" alt="">
                            <p>660 Min. FICO</p>
                        </div>
                        <div class="loan-program-points">
                            <img src="~/assets/images/point-image.png" alt="">
                            <p>Cashout up to 72.5% Available</p>
                        </div>
                        <div class="loan-program-points">
                            <img src="~/assets/images/point-image.png" alt="">
                            <p>Loans from 150k to $30MM</p>
                        </div>
                        <div class="loan-program-points">
                            <img src="~/assets/images/point-image.png" alt="">
                            <p>Up to 36 month terms available</p>
                        </div>
                        <div class="loan-program-points">
                            <img src="~/assets/images/point-image.png" alt="">
                            <p>Non-recourse available</p>
                        </div>
                        <div class="loan-program-points">
                            <img src="~/assets/images/point-image.png" alt="">
                            <p>Foreign National up to 65% LTV</p>
                        </div>
                        <div class="loan-program-points">
                            <img src="~/assets/images/point-image.png" alt="">
                            <p>No U.S. Credit, Work Visa, or ITIN Required on Foreign National</p>
                        </div>
                    </div>
                </div>
                <div class="loan-program">
                    <div class="loan-program-img4">
                        <img src="~/assets/images/house and hand.png" alt="">
                    </div>
                    <div class="loan-program-description">
                        <h3 class="common-heading">RENTAL LOANS</h3>
                        <p class="paragraph">DSCR loans for investors seeking to finance and hold an unlimited number of
                            rental properties for cashflow.</p>
                        <div class="loan-program-points">
                            <img src="~/assets/images/point-image.png" alt="">
                            <p>SFR1-4, Condos, Townhomes</p>
                        </div>
                        <div class="loan-program-points">
                            <img src="~/assets/images/point-image.png" alt="">
                            <p>Up to 90% LTC & 75% ARV</p>
                        </div>
                        <div class="loan-program-points">
                            <img src="~/assets/images/point-image.png" alt="">
                            <p>Rates from 9.95%</p>
                        </div>
                        <div class="loan-program-points">
                            <img src="~/assets/images/point-image.png" alt="">
                            <p>660 Min. FICO</p>
                        </div>
                        <div class="loan-program-points">
                            <img src="~/assets/images/point-image.png" alt="">
                            <p>Loans from $100k to $3MM</p>
                        </div>
                        <div class="loan-program-points">
                            <img src="~/assets/images/point-image.png" alt="">
                            <p>Always 100% of rehab cost</p>
                        </div>
                        <div class="loan-program-points">
                            <img src="~/assets/images/point-image.png" alt="">
                            <p>Up to 24 month terms available</p>
                        </div>
                        <div class="loan-program-points">
                            <img src="~/assets/images/point-image.png" alt="">
                            <p>Non-recourse available</p>
                        </div>
                        <div class="loan-program-points">
                            <img src="~/assets/images/point-image.png" alt="">
                            <p>Foreign National up to 75% LTC</p>
                        </div>
                        <div class="loan-program-points">
                            <img src="~/assets/images/point-image.png" alt="">
                            <p>No U.S. Credit, Work Visa, or ITIN Required on Foreign National</p>
                        </div>
                    </div>
                </div>
                <div class="loan-program">
                    <div class="loan-program-img5">
                        <img src="~/assets/images/hand shake.png" alt="">
                    </div>
                    <div class="loan-program-description">
                        <h3 class="common-heading">STR's</h3>
                        <p>DSCR loans for investors seeking to purchase or refinance short-term rentals.</p>
                        <div class="loan-program-points">
                            <img src="~/assets/images/point-image.png" alt="">
                            <p>SFR1-4, Condos, Townhomes</p>
                        </div>
                        <div class="loan-program-points">
                            <img src="~/assets/images/point-image.png" alt="">
                            <p>Up to 80% LTV</p>
                        </div>
                        <div class="loan-program-points">
                            <img src="~/assets/images/point-image.png" alt="">
                            <p>Rates from 6.75%</p>
                        </div>
                        <div class="loan-program-points">
                            <img src="~/assets/images/point-image.png" alt="">
                            <p>660 Min. FICO</p>
                        </div>
                        <div class="loan-program-points">
                            <img src="~/assets/images/point-image.png" alt="">
                            <p>Loans up to $3MM</p>
                        </div>
                        <div class="loan-program-points">
                            <img src="~/assets/images/point-image.png" alt="">
                            <p>Single asset or portfolio</p>
                        </div>
                        <div class="loan-program-points">
                            <img src="~/assets/images/point-image.png" alt="">
                            <p>30 year term</p>
                        </div>
                        <div class="loan-program-points">
                            <img src="~/assets/images/point-image.png" alt="">
                            <p>Interest-Only options and ARMs available</p>
                        </div>
                        <div class="loan-program-points">
                            <img src="~/assets/images/point-image.png" alt="">
                            <p>Requires 1 yr operating history & 50% occupancy</p>
                        </div>
                        <div class="loan-program-points">
                            <img src="~/assets/images/point-image.png" alt="">
                            <p>Foreign National up to 65% LTV</p>
                        </div>
                        <div class="loan-program-points">
                            <img src="~/assets/images/point-image.png" alt="">
                            <p>No U.S. Credit, Work Visa, or ITIN Required on Foreign National</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
    <section class="loan-fund-section">
        <div class="container">
            <div class="loan-fund-parent">
                <div class="loan-fund-img">
                    <img src="~/assets/images/Group 8.png" alt="">
                </div>
                <div class="loan-fund-description">
                    <h1 class="common-heading">Get your loan funded <i>now!</i></h1>
                    <p>Find out what makes our borrower experience unique. <br> Get in touch with a dedicated loan
                        advisor.</p>
                    <a href="#" class="btn-light">APPLY NOW</a>
                </div>
            </div>
        </div>

    </section>
    <section class="images-link-section">
        <div class="container">
            <div class="images-link-parent">
                <div class="images-link">
                    <img src="~/assets/images/loan-house-img.png" alt="">
                    <p>A team of experts</p>
                </div>
                <div class="images-link">
                    <img src="~/assets/images/bank-img.png" alt="">
                    <p>Institutionally backed</p>
                </div>
                <div class="images-link">
                    <img src="~/assets/images/dollar-image.png" alt="">
                    <p>Competitive rates and products</p>
                </div>
                <div class="images-link">
                    <img src="~/assets/images/calender-image.png" alt="">
                    <p>Speed of execution</p>
                </div>
            </div>
        </div>
    </section>
    <section id="broker" class="broker-section">
        <div class="container">
            <div class="default-parent">
                <div class="default-description">
                    <svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M10 24H2L3.83727 11.5984C1.59228 10.7305 0 8.55122 0 6C0 2.68629 2.68629 -1.90735e-06 6 -1.90735e-06C9.31371 -1.90735e-06 12 2.68629 12 6C12 8.55122 10.4077 10.7305 8.16273 11.5984L10 24Z"
                            fill="#1B66DE" />
                    </svg>
                    <h1 class="default-heading common-heading">Become a Broker</h1>
                    <p class="default-paragraph">We are excited to partner with you and offer your clients the best
                        Business Purpose lending
                        solutions available. As a leading direct lender, we pride ourselves on providing fast and
                        flexible financing options for our brokers and their clients. <br>
                        Our simple and efficient intake form makes it easy for brokers to submit their loan scenarios
                        and begin working with our team of experienced professionals. We offer competitive rates,
                        personalized service, and a streamlined process from start to finish. <br>
                        Join our network of successful brokers and take advantage of our industry-leading speed, tools,
                        and resources. Sign up today to start working with Lendmarq and experience the benefits of a
                        true lending partner.
                    </p>
                    <div class="rate-sheet-link">
                        <p>Or, check and<a class="default-link" href="#">Download our Rate Sheets Now!</a></p>
                    </div>
                    <div class="barcode">
                        <img src="~/assets/images/bar-code.png" alt="">
                    </div>
                </div>
                <div class="form-parent broker-form">
                    <h3 class="form-heading">Apply now and we will get in touch</h3>
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
                            <select class="option-selection" required>
                                <option value="Fix and flip" disabled selected>Fix & Flip</option>
                                <option value="Rental">Rental</option>
                                <option value="vacation and rental">Vacation Rental</option>
                                <option value="Construction">Construction</option>
                                <option value="Bridge">Bridge</option>
                            </select>
                        </div>
                        <div class="radio-form-group">
                            <p class="form-paragraph">Do you have active deal(s) that need funding?</p>
                            <div class="radio-form">
                                <label><input type="radio" name="approval" value="yes" required> Yes</label>
                                <label><input type="radio" name="approval" value="no" required> No</label>
                            </div>
                        </div>
                        <div class="sold-deal-form">
                            <label for="experience" class="form-paragraph">Experience (number of deals sold)</label>
                            <div class="form-group">
                                <select class="option-selection" required>
                                    <option value="" disabled selected>Beginner (0 to 4 deals)</option>
                                    <option value="intermediate">Intermediate (5 to 10 deals)</option>
                                    <option value="expert">Expert (11+ deals)</option>
                                </select>
                            </div>
                        </div>
                        <div class="radio-form-group">
                            <p class="form-paragraph">Are you an approved Capital Key broker?</p>
                            <div class="radio-form">
                                <label><input type="radio" name="approval" value="yes" required> Yes</label>
                                <label><input type="radio" name="approval" value="no" required> No</label>
                            </div>
                        </div>
                        <textarea class="deal-summary" placeholder="Describe the deal summary" required></textarea>
                        <div class="form-group">
                            <input class="form-text hear-text investor-hear" type="text"
                                placeholder="How Did You Hear About Us? (required)">
                        </div>
                        <button class="dark-btn">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
    <section class="experience-section">
        <div class="container">
            <div class="experience-parent">
                <h1 class="common-heading">“The best experience I have ever had. <br>This team is amazing!”</h1>
                <img src="~/assets/images/rating-star.png" alt="">
                <i>The Team are superstars! They are all stars at getting an investment loan <br> closed and are so
                    incredibly diligent. Other lenders in the investment <br> property space can leave you at the
                    closing
                    table at the last minute. Do <br> yourself a favor and work with Lendmarq to get the deal closed
                    right!
                </i>
                <p>Juan Morales, <span>Advance Capital Funding</span></p>
            </div>
        </div>
    </section>


</template>


<style scoped>

</style>