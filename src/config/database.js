import { configDotenv } from "dotenv";
configDotenv();

const databaseConfig = {
  dialect: process.env.DB_DIALECT,
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  dialectOptions: {
    ssl: {
      require: process.env.DB_SSL,
    },
  },
  logging: false,
  timezone: "-03:00",
  define: {
    timestamps: true,
    underscored: false,
    freezeTableName: true,
  },
};

export default databaseConfig;
