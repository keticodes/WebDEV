const age = 25;

if (age > 18) {
    var status = "Adult"
    console.log("Status:", status);
}

//Uncomment the following line to see is 'status' is accessible or not
console.log("Status outside block:", status);

let birthYear = 1998;
//Uncomment the following line to see that reassignment will result in an error
birthYear = 2000;
console.log("Birth Year:", birthYear);