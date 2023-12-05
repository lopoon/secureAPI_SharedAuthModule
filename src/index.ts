import { SharedAppModule } from './app.module';
import { JwtAuthGuard } from './shared-auth/jwt-auth.guard';
import { Scopes } from './shared-auth/scopes.decorator';
import { ScopesGuard } from './shared-auth/scopes.guard';
import { SharedAuthModule } from './shared-auth/shared-auth.module';

// whatever you want to export
export { SharedAppModule, JwtAuthGuard, ScopesGuard, Scopes, SharedAuthModule};