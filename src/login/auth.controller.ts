import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('register')
    async register(registerDto: RegisterDto): Promise<any> {
        const user = await this.authService.register(registerDto);
        return { message: 'Registration successful', user };
    }

    @Post('login')
    async login(loginDto: LoginDto): Promise<any> {

        const {email, password} = loginDto
        
        const user = await this.authService.login(email, password);
        if (user) {
            return { message: 'Login successful', user };
        } else {
            return { message: 'Invalid email or password' };
        }
    }
}
