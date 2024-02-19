import { Request, Response } from "express";
import mssql from 'mssql'
import { sqlConfig } from "../Config/sql.config";
import bcrypt from 'bcrypt'

export const loginController = ( async(req: Request, res:  Response) =>{
    try {
        const { email, password } = req.body

        const pool = await mssql.connect(sqlConfig);
        let user = (await pool.request()
        .input("email", mssql.VarChar, email)
        .execute('loginUser')
        ).recordset

        if(user[0]?.email == email){
            const isPwd = await bcrypt.compare(password, user[0].password)

            if(!isPwd){
                res.status(201).json({
                    pwderror: "Incorrect Password"
                })
            } else {
                res.status(200).json({
                    success: "login success"
                })
            }
        } else {
            return res.status(201).json({
                emailerror: "User not found"
            })
        }
    } catch (error) {
        res.status(500).json({
            error
        })
    }
})