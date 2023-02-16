import { Request, Response } from "express";
import { userRepository } from '../repositories/userRepositorie'


export class userController {

    async create(req: Request, res:Response ) {
        const {name, email, } = req.body


        try {
            const newRoom = userRepository.create({name, email})
            await userRepository.save(newRoom)
            return res.status(201).json(newRoom)
        } catch (error) {
            console.log(error)
            return res.status(500).json({Message: "Internal server error!"})
        }

    }

}