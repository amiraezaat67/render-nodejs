import User from "../../../DB/models/user.model.js";
import { hashSync, compareSync } from "bcrypt";
// signup
export const signup = async (req, res) => {
  try {
    // destruct data
    const { name, email, password, gender } = req.body;

    // check if email exists
    const isEmailExists = await User.findOne({ where: { email } }); // {} ,null
    if (isEmailExists) {
      return res.json({ message: "Email already exists" });
    }
    const cipher = hashSync(password, 10);

    // create user
    const user = await User.create({ name, email, password: cipher, gender });
    res.json({ message: "User created successfully", user });
  } catch (error) {
    console.log(error);
    res.json({ message: "Something went wrong" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const isUserExists = await User.findOne({ where: { email } });
    if (!isUserExists) {
      return res.json({ message: "Invalid email or password" });
    }
    // match pass
    const isPassMatch = compareSync(password, isUserExists.password); // true , false\
    if (!isPassMatch) {
      return res.json({ message: "Invalid email or password" });
    }

    res.json({ message: "Login success" });
  } catch (error) {
    console.log(error);
    res.json({ message: "Something went wrong" });
  }
};
