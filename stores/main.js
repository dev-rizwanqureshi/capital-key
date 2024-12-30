import { defineStore } from 'pinia'
import { useRouter } from 'vue-router';
import axios from 'axios';
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
        ckl_dedicated_loan_message: null
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

        //
    },
});
