import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class RoleMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // Kiểm tra vai trò từ req.user
    const userRole = req.user?.role;
    console.log(userRole);
    // Kiểm tra vai trò và thực hiện logic xác thực
    if (userRole !== 'admin') {
      throw new UnauthorizedException('Access denied');
    }

    // Nếu xác thực thành công, gọi next() để chuyển tiếp yêu cầu
    next();
  }
}