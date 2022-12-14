const scriptURL = 'https://script.google.com/macros/s/AKfycbyxUltLgCaaVtb0dmYKsJ97skawX4FL6f3SjNAFIClpbjfGB8UKgKlcyTDl9415d7h0/exec'
            const form = document.forms['submit-to-google-sheet']
            const btnKirim = document.querySelector('.btn-kirim')
            const btnLoading = document.querySelector('.btn-loading')
            const myAlert = document.querySelector('.my-alert')
            form.addEventListener('submit', e => {
                //ketika tombol submit diklik
                //tampilkan loading , hilang kirim
                btnLoading.classList.toggle('d-none');
                btnKirim.classList.toggle('d-none');
                e.preventDefault()
                fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                    .then(response =>{ 
                        //tampilkan kirim , hilang loading
                        btnLoading.classList.toggle('d-none');
                        btnKirim.classList.toggle('d-none');
                        //tampilkan alert
                        myAlert.classList.toggle('d-none')
                        form.reset();
                        console.log('Success!', response)
                })
                    .catch(error => console.error('Error!', error.message))
            })