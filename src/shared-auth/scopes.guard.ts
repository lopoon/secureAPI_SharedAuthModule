import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class ScopesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredScopes = this.reflector.getAllAndOverride<string[]>('scopes', [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredScopes) {
      return true;
    }
    const { jwtToken } = context.switchToHttp().getRequest();
    const userScopes = jwtToken?.scopes || []; // Use optional chaining to handle undefined user
    return requiredScopes.every((scope) => userScopes.includes(scope));
  }
}