import { AccountSchema } from "../models/Users.model.js";

class UserManager {
    
    async findUser(username) {
        try {
            const user = await AccountSchema.findOne({ username });
            return user;
        } catch (error) {
            throw error;
        }
    }

    async findAllUsers() {
        try {
            const users = await AccountSchema.find();
            return users;
        } catch (error) {
            throw error;
        }
    }

    async findUserById(id) {
        try {
            const user = await AccountSchema.findById(id);
            return user;
        } catch (error) {
            throw error;
        }
    }

    async createUser(data) {
        try {
            const user = await AccountSchema.create(data);
            return user;
        } catch (error) {
            throw error;
        }
    }

    async deleteUserById(id) {
        try {
            const user = await AccountSchema.findByIdAndDelete(id);
            return user;
        } catch (error) {
            throw error;
        }
    }

    async deleteAllUsers() {
        try {
            const result = await AccountSchema.deleteMany();
            return result;
        } catch (error) {
            throw error;
        }
    }

    async updateUserById(id, data) {
        try {
            const user = await AccountSchema.findByIdAndUpdate(id, data, { new: true });
            return user;
        } catch (error) {
            throw error;
        }
    }
}

export const AccountManager = new UserManager();
