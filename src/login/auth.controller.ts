import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('register')
    async register(
        @Body()
        registerDto: RegisterDto
    ): Promise<any> {
        const user = await this.authService.register(registerDto);
        return { message: 'Registration successful', user };
    }

    @Post('login')
    async login(@Body() body: { email: string, password: string }): Promise<any> {

        const { email, password } = body;
        const user = await this.authService.validateUser(email, password);

        if (user) {
            const token = await this.authService.login(user);
            return { message: 'Login successful', token };
        } else {
            return { message: 'Invalid email or password' };
        }
    }
}
