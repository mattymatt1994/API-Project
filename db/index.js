import mysql from "mysql2";
import config from "../config";

const connection = mysql.createPool(config.mysql);
//Link = connection
export default connection;