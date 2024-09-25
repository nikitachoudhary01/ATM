document.querySelector('.get-money').addEventListener('click', () => {
    let amount = parseInt(document.querySelector('.amount-input').value);
    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount...');
        return;
    }
    const notes = [500, 200, 100, 50, 20, 10, 5, 2, 1];
    let result = '';
    let totalNotes = 0;
    notes.forEach((note) => {
        let count = Math.floor(amount / note);
        if (count > 0) {
            result += `<li>${count} note${count > 1 ? 's' : ''} of Rs ${note}</li><hr class="hr">`;
            totalNotes += count;
            amount -= count * note;
        }
    });
    document.querySelector('.nav ul').innerHTML = result;
    document.querySelector('.nav h6').innerText = `Total notes dispensed: ${totalNotes}`;
});

























// document.querySelector('.get-money').addEventListener('click', () => {
//     let amount = parseInt(document.querySelector('.amount-input').value);
//     if (isNaN(amount) || amount <= 0) {
//         alert('Please enter a valid amount');
//         return;
//     }
//     const denominations = [500, 200, 100, 50, 20, 10, 5, 2, 1];
//     let noteCount = {}; 
//     denominations.forEach(denomination => {
//         noteCount[denomination] = Math.floor(amount / denomination);
//         amount = amount % denomination;
//     });
//     let resultHtml = '<h6>You will get the following amount:</h6><hr class="hr">';
//     let totalNotes = 0;
//     for (let [denomination, count] of Object.entries(noteCount)) {
//         if (count > 0) {
//             resultHtml += `<h6>${denomination} x ${count}</h6>`;
//             totalNotes += count;
//         }
//     }
//     resultHtml += `<hr class="hr"><h6>Total notes dispensed: ${totalNotes}</h6>`;
//     document.querySelector('.nav').innerHTML = resultHtml;
    
// });









// document.querySelector('.get-money').addEventListener('click', () => {
//     let amount = parseInt(document.querySelector('.amount-input').value);
//     const denominations = [500, 200, 100, 50, 20, 10, 5, 2, 1];
//     let denominationCount = {}; 
//     denominations.forEach(denom => {
//         if (amount >= denom) {
//             denominationCount[denom] = Math.floor(amount / denom); 
//             amount %= denom; 
//         }
//     });
//     let resultHTML = `<h6>You will get the following amount:</h6><hr class="hr">`;
//     let totalNotes = 0;
//     for (let denom in denominationCount) {
//         resultHTML += `<p>${denom} x ${denominationCount[denom]}</p>`;
//         totalNotes += denominationCount[denom];
//     }
//     resultHTML += `<hr class="hr"><h6>Total notes dispensed: ${totalNotes}</h6>`;
//     document.querySelector('.nav').innerHTML = resultHTML;
//     document.querySelector('.happy').innerHTML = `
//         <h6>Screen Details:</h6>
//         <p>The screen above now displays the denominations and total number of notes required to dispense the entered amount.</p>
//         <h6>Core Functionality (Workflow)</h6>
//         <p>The user enters an amount (whole numbers only) in the text field. Upon clicking "Get Money", the app calculates the minimum number of notes required 
//         for the exact amount using denominations of Rs 1, 2, 5, 10, 20, 50, 100, 200 and 500. The result is then displayed in the right panel.</p>
//     `;
// });
