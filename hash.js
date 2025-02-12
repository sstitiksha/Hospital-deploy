import bcrypt from "bcrypt";

const hashPassword = async (plainPassword) => {
  const saltRounds = 10; // Higher value = more secure but slower
  const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
  console.log("Hashed Password:", hashedPassword);
};

hashPassword("adminpassword"); // Change this to the password you want to hash
