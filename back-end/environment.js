const path = require("path");

const ENV = process.env.NODE_ENV || "development";
const PATH = path.resolve(__dirname, "../back-end/.env." + ENV);

console.log(`ENV: ${ENV}`);
console.log(`Loading ${PATH}`);

require("dotenv").config({ path: PATH });

module.exports = ENV;
