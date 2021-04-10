const scriptURL = 'https://script.google.com/macros/s/AKfycbzNNgTdX-HI2JQPHnbiJcC3x6OLGT61QZwO00AFIZ7yeRm--uXsWgUSFoa3ckFy3PMb/exec';
const form = document.forms['formwebsite'];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-load");
const myAlert = document.querySelector(".alert");


form.addEventListener('submit', e => {
    e.preventDefault();
    btnLoading.classList.toggle('d-none');
    btnKirim.classList.toggle('d-none');
    fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form)
        })
        .then(response => {
            btnLoading.classList.toggle('d-none');
            btnKirim.classList.toggle('d-none');
            myAlert.classList.toggle('d-none');
            form.reset();
            console.log('Success!', response);
        })
        .catch(error => console.error('Error!', error.message))
})
