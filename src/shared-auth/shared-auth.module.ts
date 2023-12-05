import { Module } from '@nestjs/common';
import { SharedAuthService } from './shared-auth.service';
import { JwtAuthGuard } from './jwt-auth.guard'; // import JwtAuthGuard
import { ScopesGuard } from './scopes.guard';
import { JwtModule } from '@nestjs/jwt';
import { readFileSync } from 'fs';
import * as dotenv from 'dotenv';

dotenv.config();
@Module({
  imports: [
    JwtModule.register({
      secret: process.env.PRIVATE_KEY_PATH,
      publicKey: readFileSync(process.env.PRIVATE_KEY_PATH),
      privateKey: readFileSync(process.env.PRIVATE_KEY_PATH),
      signOptions: { algorithm: 'RS256', expiresIn: '60s' },
    })
  ],
  providers: [SharedAuthService, JwtAuthGuard, ScopesGuard],
  exports: [SharedAuthService, JwtAuthGuard, ScopesGuard, JwtModule]
})
export class SharedAuthModule {}
