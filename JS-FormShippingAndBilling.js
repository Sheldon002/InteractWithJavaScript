/*Add the JavaScript here for the function billingFunction().  It is responsible for setting and clearing the fields in Billing Information */
function billingFunction()
{
  var sn = document.getElementById("shippingName");
  var bn = document.getElementById("billingName");
  var sz = document.getElementById("shippingZip");
  var bz = document.getElementById("billingZip");
  if(document.getElementById("same").checked)
    {
     bn.value = sn.value;
     bz.value = sz.value;
    }
  else
    {
      bn.value = "";
     bz.value = "";
    }
}