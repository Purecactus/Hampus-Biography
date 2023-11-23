// Function to popup
document.addEventListener('DOMContentLoaded', function () {
    var sendbutton = document.getElementById('sendbutton');

    sendbutton.addEventListener('click', function (){
        setTimeout(function () {
            alert('Your message has been sent!');
        }, 0);
    })
});