/*var x = Math.random()
console.log(x) //0---1(F)
    //console.log(x * 10000)


//Math.random()*(HN-LN)+LN
var result = Math.random() * (9999 - 1000) + 1000
console.log(result)

var OTP = Math.floor(result) //to remove the decimal value we use floor
console.log(OTP)*/
function display() {
    var x = Math.random() * (9999 - 1000) + 1000
    var otp = Math.floor(x)
    console.log(otp)
    var name = document.getElementById("input").value
    document.getElementById("output").innerHTML = "dear " + name + " your otp is " + otp
}