import User from "../models/user.js";
import { UserRepository } from "../repository/index.js";

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async signup(data) {
    const user = await this.userRepository.create(data);
    return { email: user.email, name: user.name };
  }

  async getUserByEmail(email) {
    try {
      const user = this.userRepository.findByEmail({ email });
      return user;
    } catch (error) {
      throw error;
    }
  }

  async signIn(email, password) {
    try {
      const user = await this.getUserByEmail(email);

      if (!user) {
        throw {
          message: "No user found",
          success: false,
        };
      }

      if (!user.comparePassword(password)) {
        throw {
          message: "Incorrect Password",
          success: false,
        };
      }

      const token = user.genJWT();
      return token;
    } catch (error) {
      throw error;
    }
  }
}

export default UserService;
