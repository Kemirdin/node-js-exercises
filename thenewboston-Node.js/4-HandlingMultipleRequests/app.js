function placeAndOrder (orderNumber) {
  console.log ('Customer order:', orderNumber);

  cookAndDeliverFood (function () {
    console.log ('Delivered food order:', orderNumber);
  });
}

//Simulate a 5 second operation
function cookAndDeliverFood (callback) {
  setTimeout (callback, 5000);
}

//Simulate users web request
placeAndOrder (1);
placeAndOrder (2);
placeAndOrder (3);
placeAndOrder (4);
placeAndOrder (5);
placeAndOrder (6);
