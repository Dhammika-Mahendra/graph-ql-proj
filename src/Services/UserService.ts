
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'; 
import { User } from 'src/graphQL/models/User';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

    constructor(@InjectRepository(User) private usersRepository: Repository<User>) {}

    getUsers(){
        return this.usersRepository.find();
    }
}