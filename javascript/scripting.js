//Displays Today's Date
const todaysDate = new Date();
document.getElementById("date").innerHTML = todaysDate;

//Order Completion Form
function orderComplete()
{
    alert("Thank You! Your Order has been submitted");
}

//Checkbox Script
function headphoneSelection()
{
    if(document.getElementById('selection').checked = true)
    {
        console.log("Checkbox has been checked");
    }
    else
    {
        alert("Box hasn't been checked");
    }
}

function displayQuantityAndPrice(quantPrice)
{
    var displayBoxes = document.getElementById(quantPrice);

    if(displayBoxes.visibility === "display")
    {
        displayBoxes.visibility = "hidden";
    }
    else
    {
        displayBoxes.visibility="display";
    }
}

//Thanking the Customer
const custName = document.getElementById('checkout_cust');

function checkout()
{
    checkout_cust.innerHTML = custName.ariaValueMax;
}

orderComplete.addEventListener('click', custName);