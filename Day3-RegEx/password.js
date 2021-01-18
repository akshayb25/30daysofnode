// Password must contain 1 capital letter [A-Z]
// Password must contain 1 small letter [a-z]
// Password must contain 1 number [0-9]
// Password must contain 1 special character [!,@,#,$,%,^,. . . ] etc
// Length of the password must be within the range [6 to 16]

let password = 'aA1@#2Bb';
const pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

password.match(pattern) ? console.log('Valid Password') : console.log('Invalid Password');