const { Person } = require("./person");
const dotenv = require("dotenv");

dotenv.config();

//require("./modules/path");
//require("./modules/fs");
//require("./modules/http");
require("./modules/express");

const person = new Person("Natã");
