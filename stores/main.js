import { defineStore } from 'pinia'
import { useRouter } from 'vue-router';
import $ from 'jquery';

export const useMainJS = defineStore({
    id: 'useMainJS',
    state: () => ({
        ckl_dedicated_loan_loading: false,
        ckl_dedicated_loan : {
            name:'',
            email:'',
            phone:'',

        },
        ckl_dedicated_loan_error: null,
        ckl_dedicated_loan_message: null,




        ckl_apply_now_in_touch_loading: false,
        ckl_apply_now_in_touch : {
            first_name: '',
            last_name: '',
            email: '',
            phone: '',
            fix_flip: '',
            active_deals_need_funding: '',
            experience_no_of_deal_sold: '',
            deal_summary: '',
            where_did_hear_about_us: '',
        },
        ckl_apply_now_in_touch_error: null,
        ckl_apply_now_in_touch_message: null,





        request_a_quote_loading: false,
        request_a_quote: {
            first_name: '',
            last_name: '',
            email: '',
            phone: '',
            property_state: '',
            loan_program: '',
            loan_purpose: '',
            property_type: '',
            close_time: '',
            deal_summary: '',
            hear_about_us: '',
        },
        request_a_quote_error: null,
        request_a_quote_message: null,






        investor_inquiry_loading: false,
        investor_inquiry: {
            first_name: '',
            last_name: '',
            email: '',
            phone: '',
            property_state: '',
            property_type: '',
            lien_position: '',
            term_limits: '',
            return_on_investment: '',
            loan_to_value: '',
            loan_amount: '',
            investment_participation_mortgage:'',
            investment_participation_equity:'',
            fund_available: '',
            availability_of_funds: '',
            purpose_of_loan: '',
            additional_details: '',
            where_did_hear_about_us: '',
        },
        investor_inquiry_error: null,
        investor_inquiry_message: null,
    }),
    actions: {

        ckl_dedicated_loan_ValidateFields() {
            console.log('ckl_dedicated_loan_ValidateFields')
            let vm = this;
            vm.ckl_dedicated_loan_error = null;
            vm.ckl_dedicated_loan_message = null;


            if (this.ckl_dedicated_loan.name == '') {
                vm.ckl_dedicated_loan_error = 'Name is required.';
                return false;
            }

            if (this.ckl_dedicated_loan.email == '') {
                vm.ckl_dedicated_loan_error = 'Email is required.';
                return false;
            }

            if (this.ckl_dedicated_loan.phone == '') {
                vm.ckl_dedicated_loan_error = 'Phone is required.';
                return false;
            }

            vm.ckl_dedicated_loan_error = '';

            return true;

        },
        cklDedicatedLoan() {
            console.log('cklDedicatedLoan')
            let vm = this;

            if(! this.ckl_dedicated_loan_ValidateFields()) {
                return false;
            }

            const formData = new FormData();

            for (const [key, value] of Object.entries(vm.ckl_dedicated_loan)) {
                formData.append(key, value);
            }

            vm.ckl_dedicated_loan_loading = true;


            const scriptURL = 'https://script.google.com/macros/s/AKfycbygZjo6bE1B8y1jLovmAkOLHIgBM2Nwkhvj6fXfJdVWmq1UMqenV_3nC34yLJ2H7_igVQ/exec';

            fetch(scriptURL, { method: 'POST', body: formData })
                .then(response => {
                    console.log('response')
                    console.dir(response)
                    if (response.ok) {
                        console.log('ok')
                        vm.ckl_dedicated_loan = {
                            name:'',
                            email:'',
                            phone:'',
                        }
                        vm.ckl_dedicated_loan_error = null;
                        vm.ckl_dedicated_loan_message = 'Successfully submitted';
                    } else {
                        console.log('not ok')

                    }
                })
                .catch(error => {
                    console.error('Error!', error.message)
                    vm.ckl_dedicated_loan_error = 'API error';
                }).finally(() => {
                 vm.ckl_dedicated_loan_loading = false;
                })
        },






        validateCKLApplyNowInTouch() {

            this.ckl_apply_now_in_touch_error = null;
            const requiredFields = [
                { key: 'first_name', label: 'First Name' },
                { key: 'last_name', label: 'Last Name' },
                { key: 'email', label: 'Email' },
                { key: 'phone', label: 'Phone' },
                { key: 'fix_flip', label: 'Fix & Flip' },
                { key: 'active_deals_need_funding', label: 'Active Deals Funding' },
                { key: 'experience_no_of_deal_sold', label: 'Experience' },
                { key: 'deal_summary', label: 'Deal Summary' },
                { key: 'where_did_hear_about_us', label: 'How Did You Hear About Us' },
            ];

            for (const field of requiredFields) {
                if (!this.ckl_apply_now_in_touch[field.key]) {
                    this.ckl_apply_now_in_touch_error = `${field.label} is required.`;
                    return false;
                }
            }

            return true;
        },
        async submitCKLApplyNowInTouch() {
            let vm = this;
            if (!this.validateCKLApplyNowInTouch()) {
                return false;
            }

            vm.ckl_apply_now_in_touch_loading = true;

            const scriptURL = 'https://script.google.com/macros/s/AKfycbydT8B47vpTM80Cp-fC9EMiwpZPIess8PrKzsxd5PHIL6Q2mAx7n7dEGwvYTOMm0ZLugQ/exec';


            const formData = new FormData();

            for (const [key, value] of Object.entries(vm.ckl_apply_now_in_touch)) {
                formData.append(key, value);
            }

            formData.append('name', vm.ckl_apply_now_in_touch.first_name + ' ' + vm.ckl_apply_now_in_touch.last_name);

            fetch(scriptURL, { method: 'POST', body: formData })
                .then(response => {
                    console.log('response')
                    console.dir(response)
                    if (response.ok) {
                        console.log('ok')
                        vm.ckl_apply_now_in_touch_message = 'Form submitted successfully!';
                        vm.ckl_apply_now_in_touch_error = null;
                        vm.resetCKLApplyNowInTouch();
                    } else {
                        console.log('not ok')

                    }
                })
                .catch(error => {
                    console.error('Error!', error.message)
                    vm.ckl_apply_now_in_touch_error = 'API error';
                }).finally(() => {
                vm.ckl_apply_now_in_touch_loading = false;
            })

        },
        resetCKLApplyNowInTouch() {
            this.ckl_apply_now_in_touch = {
                name: '',
                email: '',
                phone: '',
                fix_flip: '',
                active_deals_need_funding: '',
                experience_no_of_deal_sold: '',
                deal_summary: '',
                where_did_hear_about_us: '',
            };
        },







        validateRequestAQuote() {

            this.request_a_quote_message = null;
            this.request_a_quote_error = null;
            const requiredFields = [
                { key: 'first_name', label: 'First Name' },
                { key: 'last_name', label: 'Last Name' },
                { key: 'email', label: 'Email' },
                { key: 'phone', label: 'Phone' },
                { key: 'property_state', label: 'Property State' },
                { key: 'loan_program', label: 'Loan Program' },
                { key: 'loan_purpose', label: 'Loan Purpose' },
                { key: 'property_type', label: 'Property Type' },
                { key: 'close_time', label: 'Close Time' },
                { key: 'deal_summary', label: 'Deal Summary' },
                { key: 'hear_about_us', label: 'How Did You Hear About Us' },
            ];

            for (const field of requiredFields) {
                if (!this.request_a_quote[field.key]) {
                    this.request_a_quote_error = `${field.label} is required.`;
                    return false;
                }
            }

            return true;
        },
        resetRequestAQuote() {
            this.request_a_quote =  {
                first_name: '',
                last_name: '',
                email: '',
                phone: '',
                property_state: '',
                loan_program: '',
                loan_purpose: '',
                property_type: '',
                close_time: '',
                deal_summary: '',
                hear_about_us: '',
            }
        },
        async submitRequestAQuote() {
            let vm = this;
            if (!this.validateRequestAQuote()) {
                return false;
            }

            vm.request_a_quote_loading = true;

            const scriptURL = 'https://script.google.com/macros/s/AKfycby_vlftFV2rYWzBz9xLBRJrUUsaxygRBI3qYsBCm8QrhjOEqoGJXU1RS_IX-RqpAvFlcw/exec';


            const formData = new FormData();

            for (const [key, value] of Object.entries(vm.request_a_quote)) {
                formData.append(key, value);
            }

            formData.append('name', vm.request_a_quote.first_name + ' ' + vm.request_a_quote.last_name);

            fetch(scriptURL, { method: 'POST', body: formData })
                .then(response => {
                    console.log('response')
                    console.dir(response)
                    if (response.ok) {
                        console.log('ok')
                        vm.request_a_quote_message = 'Form submitted successfully!';
                        vm.request_a_quote_error = null;
                        vm.resetRequestAQuote();
                    } else {
                        console.log('not ok')

                    }
                })
                .catch(error => {
                    console.error('Error!', error.message)
                    vm.request_a_quote_error = 'API error';
                }).finally(() => {
                vm.request_a_quote_loading = false;
            })

        },





        validateInvestorInquiry() {

            this.investor_inquiry_error = null;
            this.investor_inquiry_message = null;
            const requiredFields = [
                { key: 'first_name', label: 'First Name' },
                { key: 'last_name', label: 'Last Name' },
                { key: 'email', label: 'Email' },
                { key: 'phone', label: 'Phone' },
                { key: 'property_state', label: 'Property State' },
                { key: 'property_type', label: 'Property Type' },
                { key: 'lien_position', label: 'Lien position' },
                { key: 'term_limits', label: 'Term limits' },
                { key: 'return_on_investment', label: 'Return on investment' },
                { key: 'loan_to_value', label: 'Loan to value' },
                { key: 'loan_amount', label: 'Loan Amount' },
                { key: 'fund_available', label: 'Fund available' },
                { key: 'availability_of_funds', label: 'Availability of funds' },
                { key: 'purpose_of_loan', label: 'Purpose of loan' },
                { key: 'additional_details', label: 'Additional Details' },
                { key: 'where_did_hear_about_us', label: 'How Did You Hear About Us' },
            ];

            if(this.investor_inquiry.investment_participation_mortgage === '' && this.investor_inquiry.investment_participation_equity === '') {
                this.investor_inquiry_error = `Investment participation is required.`;
                return false;
            }

            for (const field of requiredFields) {
                if (!this.investor_inquiry[field.key]) {
                    this.investor_inquiry_error = `${field.label} is required.`;
                    return false;
                }
            }

            return true;
        },
        resetInvestorInquiry() {
            this.investor_inquiry = {
                first_name: '',
                last_name: '',
                email: '',
                phone: '',
                property_state: '',
                property_type: '',
                lien_position: '',
                term_limits: '',
                return_on_investment: '',
                loan_to_value: '',
                loan_amount: '',
                investment_participation_mortgage:'',
                investment_participation_equity:'',
                fund_available: '',
                availability_of_funds: '',
                purpose_of_loan: '',
                additional_details: '',
                where_did_hear_about_us: '',
            }
        },
        async submitInvestorInquiry() {
            console.log('submitInvestorInquiry');
            let vm = this;
            if (!this.validateInvestorInquiry()) {
                return false;
            }

            vm.investor_inquiry_loading = true;

            const scriptURL = 'https://script.google.com/macros/s/AKfycbyaKKzhQFnCd8ODgkog8gBxVwNi6Xqqt9AmD3k0-XhGppaFqXbUMOMnAFjaVmmOFM2Tyw/exec';

            const formData = new FormData();

            for (const [key, value] of Object.entries(vm.investor_inquiry)) {
                formData.append(key, value);
            }

            formData.append('name', vm.investor_inquiry.first_name + ' ' + vm.investor_inquiry.last_name);

            fetch(scriptURL, { method: 'POST', body: formData })
                .then(response => {
                    console.log('response')
                    console.dir(response)
                    if (response.ok) {
                        console.log('ok')
                        vm.investor_inquiry_message = 'Form submitted successfully!';
                        vm.investor_inquiry_error = null;
                        vm.resetInvestorInquiry();
                    } else {
                        console.log('not ok')

                    }
                })
                .catch(error => {
                    console.error('Error!', error.message)
                    vm.investor_inquiry_error = 'API error';
                }).finally(() => {
                vm.investor_inquiry_loading = false;
            })

        }

    },
});
