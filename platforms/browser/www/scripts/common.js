// Global variable that will tell us whether PhoneGap is ready
var isPhoneGapReady = false;
function init() {
// Add an event listener for deviceready
document.addEventListener("deviceready",
onDeviceReady, false);
// Older versions of Blackberry < 5.0 don't support
// PhoneGap's custom events, so instead we need to perform
// an interval check every 500 milliseconds to see whether
// PhoneGap is ready. Once done, the interval will be
// cleared and normal processing can begin.
var intervalID = window.setInterval(function() {
if (PhoneGap.available) {
onDeviceReady();
}
}, 500);
}
function onDeviceReady() {
window.clearInterval(intervalID);
// set to true
isPhoneGapReady = true;
alert('The device is now ready');
}
// Set an onload handler to call the init function
window.onload = init;