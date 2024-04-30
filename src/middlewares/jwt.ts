import { NextFunction, Request, Response } from "express";
import { verify } from 'jsonwebtoken';
import dotenv from "dotenv";

dotenv.config();

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader?.split(' ')[1];

    if (token == null) {
        return res.sendStatus(401); 
    }

    verify(token, process.env.JWT_SECRET as string, (err: any, payload: any) => {
        if (err) {
            return res.sendStatus(403);
        }
        req.body.user = payload;
        next(); 
    });
};