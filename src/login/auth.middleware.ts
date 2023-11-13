import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization;
    if (!token || !token.startsWith('Bearer ')) {
      throw new UnauthorizedException('Invalid token');
    }

    // Lấy token từ header và loại bỏ phần "Bearer "
    const authToken = token.split(' ')[1];
    try {
      const decodedToken = jwt.verify(authToken, 'nestjs-secret-key');
      console.log("decodedToken", decodedToken);
      req.user = decodedToken;

      next();
    } catch (error) {
      throw new UnauthorizedException('Invalid token');
    }
  }
}