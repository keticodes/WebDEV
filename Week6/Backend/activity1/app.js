const bcrypt = require("bcrypt");
const saltRounds = 10;
const password = "keti@thecodegenius";

async function testBcrypt() {
    try {
        const salt = await bcrypt.genSalt (saltRounds);
        console.log("Salt: ", salt);
        const hash = await bcrypt.hash(password, salt);
        console.log("Hash: ", hash);
    } catch (err) {
        console.log(err.message);
    }
}

async function testBcrypt2() {
    try {
const hash = await bcrypt.hash (password, saltRounds);
console.log ("Hash: ", hash);
    } catch (err) {
        console.error(err.message);
    }
}

testBcrypt();
testBcrypt2();





// Path: Dev/Week6/Backend/activity1/app.js
