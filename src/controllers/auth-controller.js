import UserService from "../services/user-service.js";

const userService = new UserService();

export const signup = async (req, res) => {
  try {
    const response = await userService.signup({
      email: req.body.email,
      password: req.body.password,
      name: req.body.name,
    });

    res.status(201).json({
      data: response,
      success: true,
      message: "Successfully created a new user",
      err: {},
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {},
      success: false,
      message: "Something went wrong",
      err: error,
    });
  }
};

export const login = async (req, res) => {
  try {
    const token = await userService.signIn(req.body.email, req.body.password);

    return res.status(200).json({
      data: token,
      message: "Successfully logged-in",
      success: true,
      err: {},
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {},
      success: false,
      message: "",
      err: error,
    });
  }
};
