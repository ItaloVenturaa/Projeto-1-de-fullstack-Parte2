const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("./models/User");

dotenv.config();
const connectDB = require("./database");

const seedUsers = async () => {
    try {
        await connectDB();

        const existingAdmin = await User.findOne({ role: "admin" });
        if (existingAdmin) {
            console.log("Admin já existe. Nenhuma alteração feita.");
            return process.exit();
        }

        const users = [
            { username: "admin", password: "admin123", role: "admin" },
            { username: "user1", password: "user123", role: "user" },
            { username: "user2", password: "user123", role: "user" }
        ];

        await User.insertMany(users);
        console.log("✅ Usuários adicionados com sucesso!");
        process.exit();
    } catch (error) {
        console.error("❌ Erro ao adicionar usuários:", error);
        process.exit(1);
    }
};

seedUsers();
