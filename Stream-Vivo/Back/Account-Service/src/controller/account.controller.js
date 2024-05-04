import {
  RegisterUser,
  login,
  getProfile,
  getUserById,
  deleteUserById,
  updateUserById
} from "../services/account.service.js";

export const RegisterController = async (req, res) => {
  try {
    const userData = req.body;
    const user = await RegisterUser(userData);
    res.status(201).json({ token: user.token }); 
  } catch (error) {
    res.status(400).json({ error: error.message }); 
  }
};

export const LoginController = async (req, res) => {
  try {
    const credentials = req.body;
    console.log("CREDENCIALES DEL USUARIO :", credentials);
    const { token } = await login(credentials); // Desestructura el resultado para obtener el token
    console.log("TOKEN DE SESIÓN :", token);
    res.status(200).json({ token }); // Devuelve el token en la respuesta
  } catch (error) {
    console.error(error);
    res.status(401).json({ error: error.message });
  }
};

export const GetProfileController = async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw new Error("Token de autorización no proporcionado o en un formato incorrecto");
    }
    const token = authHeader.split(" ")[1];
    const user = await getProfile(token);
    res.status(200).json({ user });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

export const GetUserController = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await getUserById(userId);
    res.status(200).json({ user });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export const DeleteUserController = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await deleteUserById(userId);
    res.status(200).json({ user });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export const UpdateUserController = async (req, res) => {
  try {
    const userId = req.params.id;
    const userData = req.body;
    const user = await updateUserById(userId, userData);
    res.status(200).json({ user });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
