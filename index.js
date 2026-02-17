const bcrypt = require("bcrypt");

const hashedText = async (text) => {
    
  const saltRounds = 10;

  const hashedText = await bcrypt.hash(text, saltRounds);

 console.log(`Hashed Text = ${hashedText}`);
};

 hashedText("hello")

 