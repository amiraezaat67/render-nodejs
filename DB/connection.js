import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  "bmubombwikxjxmx7qopc",
  "uyisqfyz6tbxnzzu",
  "q9xVIS1Arj57cepS7eY8",
  {
    host: "bmubombwikxjxmx7qopc-mysql.services.clever-cloud.com",
    dialect: "mysql",
  }
);

export const db_connection = async () => {
  try {
    await sequelize.sync({ alter: true, force: false, logging: false });
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

// db host
