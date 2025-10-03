import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest();

    const apiKeyHeader = req.headers['x-api-key'] || req.headers['authorization'];
    const apiKey = Array.isArray(apiKeyHeader) ? apiKeyHeader[0] : apiKeyHeader;

    if (!apiKey) {
      throw new UnauthorizedException('Missing API key');
    }

    const rawKey = apiKey.startsWith('Bearer ') ? apiKey.slice(7).trim() : apiKey;

    if (rawKey !== process.env.API_KEY) {
      throw new UnauthorizedException('Invalid API key');
    }

    return true;
  }
}
