// import dotenv from "dotenv";
// dotenv.config();

// export default {
//   development: {
//     username: process.env.DB_USERNAME,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//     host: process.env.DB_HOST,
//     dialect: process.env.DB_DIALECT|| "postgres"
//   }
// };
// config.cjs



import "dotenv/config";

const config = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD || null,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT || "postgres",
  },
};

export default config;