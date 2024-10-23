import { User } from "./user.type";
import { Request } from "express";

declare module "express" {
    interface Request {
        user?: User
    }
}