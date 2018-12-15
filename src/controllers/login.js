import { Logins } from "./../database/models";

export async function checkLogin(req, res) {
  try {
    const check = await Logins.findOne({
      where: {
        username: req.body.username,
        password: req.body.password
      }
    });
    if (check) {
      return;
    }
  } catch (error) {
    return res.json({ message: "Error", error: error.message });
  }
}
