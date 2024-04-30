import { AES, enc } from 'crypto-js';
import { genSalt, hash, compare } from 'bcryptjs';
import dotenv from "dotenv";

dotenv.config();

/**
 * Encrypt Password using Bcrypt
 * @param password string
 * @returns Promise<string>
 * @throws Error
 * */
export async function EncriptPassword(password: string) {
    if (!password) {
        throw new Error('Password is required');
    }
    const salt = await genSalt(10);
    return hash(password, salt);
}

/**
 * Compare Password
 * @param password string
 * @param hashedPassword string
 * @returns Promise<boolean>
 * @throws Error
 * */
export async function ComparePassword(password: string, hashedPassword: string) {
    if (!password) {
        throw new Error('Password is required');
    }
    if (!hashedPassword) {
        throw new Error('Hashed password is required');
    }
    return compare(password, hashedPassword);
}

/**
 * Encrypt message
 * @param content string
 * @returns string
 * */
export function encryptContent(content: string): string {
    const secretKey = process.env.CRYPTO_SECRET
    if (!secretKey) {
        throw new Error('Secret key is not defined');
    }
    const cipherText = AES.encrypt(content, secretKey).toString();
    return cipherText;
}

/**
 * Decrypt cipherText
 * @param cipherText string
 * @returns string
 * */
export function decryptContent(cipherText: string): string {
    const secretKey = process.env.CRYPTO_SECRET
    if (!secretKey) {
        throw new Error('Secret key is not defined');
    }
    const bytes = AES.decrypt(cipherText, secretKey);
    const originalText = bytes.toString(enc.Utf8);
    return originalText;
}