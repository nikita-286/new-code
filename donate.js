document.addEventListener('DOMContentLoaded', function() {
    const donationForm = document.getElementById('donationForm');
    const totalAmountElement = document.getElementById('totalAmount');
    const receiptNumberElement = document.getElementById('receiptNumber');

    let totalAmount = 0;
    let receiptNumber = 1;

    donationForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const donationAmount = parseFloat(document.getElementById('donationAmount').value);
        if (donationAmount) {
            totalAmount += donationAmount;
            totalAmountElement.textContent = totalAmount.toFixed(2);
            receiptNumberElement.textContent = receiptNumber++;
            // You can add logic here to handle the donation process, e.g., sending data to a server, updating a database, etc.
        }
        donationForm.reset(); // Reset the form after donation
    });
});