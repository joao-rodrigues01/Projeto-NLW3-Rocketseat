import { Request, Response} from 'express';
import { getRepository } from 'typeorm';


import User from '../models/Users';


export default {

     index(request: Request, response: Response) {
        return response.send({ userId: request.userId});
    },

    async createUser(request: Request, response: Response) {

        const repository = getRepository(User);
        const  {
            name,
            email,
            password 
        } = request.body;


        const userExists = await repository.findOne({ where: {email}});

        if(userExists) {
            return response.sendStatus(409);
        }

        const users = repository.create({name, email, password});
        await repository.save(users);


       return response.status(201).json(users);
       
    }

}