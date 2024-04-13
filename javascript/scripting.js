//Displays Today's Date
const todaysDate = new Date();
document.getElementById("date").innerHTML = todaysDate;

//Order Completion Form
function orderComplete() {
  
    alert("Thank You! Your Order has been submitted");

    var custName = document.getElementById("customer_name");
    custName.innerHTML = "Thanks your purchase(s) " + custName.value();
}



//Checkbox Script
function headphoneSelection() {
    if (document.getElementById('selection').checked = true) {
        console.log("Checkbox has been checked");
    }
    else {
        alert("Box hasn't been checked");
    }
}

function displayQuantityAndPrice() {
    var displayBoxes = document.getElementById("quantPrice");
     text.style.display = "block";
      }

//Thanking the Customer

/*
const custName = document.getElementById('customer_name');
function checkout() {
    var checkout = document.getElementById("customer_name");
    checkout.innerHTML = "Thanks " + checkout;
    document.getElementById("display").innerHTML = checkout;
}
*/