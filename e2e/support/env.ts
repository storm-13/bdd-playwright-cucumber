import * as dotenv from "dotenv";
dotenv.config();

export const USERNAME: string = process.env['TEST_USER'] || '';
export const PASSWORD: string = process.env['TEST_PASS'] || '';

if (!USERNAME || !PASSWORD) {
    throw new Error("Missing TEST_USER or TEST_PASS in .env file");
}