import { Body, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from './user.schema';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name)
        private userModel: mongoose.Model<User>,
        private readonly jwtService: JwtService
    ) { }

    async register(user: User): Promise<User> {
        const registerUser = await this.userModel.create(user);
        return registerUser;
    }

    async validateUser(email: string, password: string): Promise<any> {
        const user = await this.userModel.findOne({ email: email }).exec();

        if (!user) {
            throw new Error("User not found");
        }
        if (user && user.password === password) {
            // Người dùng xác thực thành công
            const { password, ...result } = user.toObject(); // Loại bỏ mật khẩu khỏi kết quả trả về

            return result;
        }

        return null; // Người dùng không xác thực thành công
    }

    async login(user: User): Promise<any> {
        const payload = { email: user.email, role: user.role }
        console.log("payload",payload);
        const access_token = this.jwtService.sign(payload, { secret: 'nestjs-secret-key', expiresIn: '1h' });
        return {
            access_token,
        };
    }
}