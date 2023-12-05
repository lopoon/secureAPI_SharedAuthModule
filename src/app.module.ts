import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SharedAuthModule } from './shared-auth/shared-auth.module';

@Module({
  imports: [SharedAuthModule],
  controllers: [AppController],
  providers: [AppService],
  exports: [SharedAuthModule],
})
export class SharedAppModule {}
