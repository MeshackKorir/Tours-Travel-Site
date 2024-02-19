import { Request, Response } from "express";
import mssql from 'mssql'
import {v4} from 'uuid'
import bcrypt from 'bcrypt'
import { sqlConfig } from "../Config/sql.config";
import { User } from "../Interfaces/user.interface";


export const signupController = async (req: Request, res: Response) => {
    try {
        const { username, email, password } = req.body;
        console.log("user body",req.body);
        
        let userID = v4();
        const hash_pwd = await bcrypt.hash(password, 8);
        const newUser={
            userID,
            username,
            email,
            password
        }
        console.log("newUser",newUser);
        
        const pool = await mssql.connect(sqlConfig);
        const result:any = await pool.request()
            .input("userID", mssql.VarChar, userID)
            .input("username", mssql.VarChar, username)
            .input("email", mssql.VarChar, email)
            .input("password", mssql.VarChar, hash_pwd)
            .execute("registerUser");

        console.log(result);

        if (result.rowsAffected>0) {
            return res.json({ message: "User registered successfully" });
        } else {
            return res.status(500).json({ message: "Failed to register user" });
        }
    } catch (error) {
        console.log({ error: error });
        return res.status(500).json({ message: "Internal server error" });
    }
};


