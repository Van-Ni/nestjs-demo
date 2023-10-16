import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserSchema } from './user.schema';
import { JwtModule } from '@nestjs/jwt';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
        JwtModule.register({
            secret: 'secret-key', 
            signOptions: { expiresIn: '1h' }, // Thời gian hết hạn của token
        }),

    ],
    controllers: [AuthController],
    providers: [AuthService]
})
export class AuthModule {

}
