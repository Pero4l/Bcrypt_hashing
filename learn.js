
const ramdomAlphabet = "1234567890!@#$%^&*()_+=-{}[]:;|\/?>.<,ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";


function encrypt(text, key) {

  let result = "";

  for (let i = 0; i < text.length; i++) {

    const char = text[i];
    
    const index = ramdomAlphabet.indexOf(char); 

    if (index === -1) {
      
      result += char;
    } else {
     
      const newIndex = (index + key) % ramdomAlphabet.length;
      result += ramdomAlphabet[newIndex];
    }
  }
  return result;
}


function decrypt(text, key) {

  let result = "";

  for (let i = 0; i < text.length; i++) {

    const char = text[i];
    const index = ramdomAlphabet.indexOf(char);

    if (index === -1) {
      result += char;
    } else {
      
      const newIndex = (index - key + ramdomAlphabet.length) % ramdomAlphabet.length;
      result += ramdomAlphabet[newIndex];
    }
  }
  return result;
}


const message = "Hello i am pero4l and learning encryption and decryption 0%4#@ z";
const key = 5;

const cipher = encrypt(message, key);
console.log("Encrypted:", cipher);

const plain = decrypt(cipher, key);
console.log("Decrypted:", plain);
