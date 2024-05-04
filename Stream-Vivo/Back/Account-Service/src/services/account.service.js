import { AccountManager } from "../managers/user.manager.js";
import { generateToken, verifyToken } from "../config/jwt.js";
import Bycript from "bcrypt";
import {v4 as uuidv4} from "uuid"

export async function RegisterUser(userData) {
  try {
    const cvu = uuidv4()

    const hashPassword = await Bycript.hash(userData.password, 20);
    const createNewUser = await AccountManager.createUser({
      username: userData.username,
      email: userData.email,
      password: hashPassword,
      first_name: userData.first_name,
      last_name: userData.last_name,
      cvu : cvu
    });

    const token = generateToken(createNewUser);
    return { token };
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function login(credentials) {
  try {
    // Busca al usuario en la base de datos por su nombre de usuario
    const user = await AccountManager.findUser(credentials.username);
console.log("user",user)
    // Verifica si el usuario existe y si la contraseña es correcta
    

    // Genera un nuevo token de autenticación para el usuario
    const token = generateToken(user);
console.log("token del usuario",token)
    // Devuelve el token de autenticación
    return token;
  } catch (error) {
    throw error;
  }
}

export async function getProfile(token){
    try {
        const decoded = await verifyToken(token)
        const user = await AccountManager.findByIdUser({username : decoded.username})
        if(!user){
            console.log("user not found")
        }
        return {
            username: user.username,
            email: user.email,
            first_name: user.first_name,
            last_name: user.last_name,
            cvu: user.cvu
          };
    } catch (error) {
        throw new Error(error.message)
    }
}

export async function getUserById(id) {
  try {
    const user = await AccountManager.findUserById(id);
    if (!user) {
      throw new Error("Usuario no encontrado");
    }
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function deleteUserById(id) {
  try {
    const user = await AccountManager.deleteUserById(id);
    if (!user) {
      throw new Error("Usuario no encontrado");
    }
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function updateUserById(id, userData) {
  try {
    const user = await AccountManager.updateUserById(id, userData);
    if (!user) {
      throw new Error("Usuario no encontrado");
    }
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
}