import { Body, Get, Post, Route } from "tsoa";
import prisma from "../db/prisma";
import { Prisma, User } from "@prisma/client";

const user = prisma.user;

@Route("users")
export default class UserController {
    @Get("/")
    public async getUsers(): Promise<User[]> {
        return await user.findMany();
    }
    @Post()
    public async postUser(@Body() data: User): Promise<User> {
        
        const newUser = await user.create({data: {...data, password: ""}});
        return newUser;

    }
}
