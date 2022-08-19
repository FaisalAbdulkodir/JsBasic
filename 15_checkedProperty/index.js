document.getElementById('myButton').onclick = function()
{
    const myCheckBox = document.getElementById('myCheckBox');
    const visaBtn = document.getElementById('visaBtn');
    const mastercardBtn = document.getElementById('mastercardBtn');
    const paypalBtn = document.getElementById('paypalBtn');
    

    if(myCheckBox.checked){
        console.log('You are subcribe');
    }else{
        console.log('You are NOT subscribe');
    }

    if(visaBtn.checked){
        console.log('Make Visa');
    }else if(mastercardBtn.checked){
        console.log('Make MasterCard');
    }else if(paypalBtn.checked){
        console.log('Make Paypal');
    }else{
        console.log('mayar glbk');
    }
}