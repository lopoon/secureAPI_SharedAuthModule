import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as fs from 'fs';
import { VerifyOptions } from 'jsonwebtoken';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}


canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization.replace('Bearer ', '');
    const publicKey = fs.readFileSync(process.env.PUBLIC_KEY_PATH, 'utf8'); 
    try {
        const options: VerifyOptions = {
            algorithms: ['RS256'],
        };
        const payload = this.jwtService.verify(token, { secret: publicKey, ...options });
        request.jwtToken = payload; // Add the payload to the request object
        return true;
    } catch (error) {
        console.log('Error verifying token:', error);
        return false;
    }
}
}