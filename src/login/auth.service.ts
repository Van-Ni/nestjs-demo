import { Body, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { User } from './user.schema';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name)
        private userModel: mongoose.Model<User>,
    ) { }

    async register(user: User): Promise<User> {
        const registerUser = await this.userModel.create(user);
        return registerUser;
    }

    async login(email: string, password: string): Promise<User> {
        const user = await this.userModel.findOne({ email });

        if (user && user.password === password) {
            return user;
        }

        return null;
    }
}
