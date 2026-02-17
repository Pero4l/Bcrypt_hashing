const bcrypt = require("bcrypt");

const hashedText = async (text) => {

  const saltRounds = 10;

  const hashedText = await bcrypt.hash(text, saltRounds);

  const check = await bcrypt.compare(text, hashedText)

 console.log(`Hashed Text = ${hashedText}`);
 console.log(`Compare Hashed of ${hashedText} to ${text} is = ${check}`);
 
};

 hashedText("hello")

 