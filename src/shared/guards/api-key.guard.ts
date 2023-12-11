import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class ApiKeyGuard implements CanActivate {
  constructor(private configService: ConfigService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();

    const {
      headers: { api_key },
    } = request;

    const correctKey = this.configService.get<string>("apiKey");

    if (!correctKey) {
      return true;
    }

    if (correctKey === api_key) {
      return true;
    }

    throw new UnauthorizedException("Não autorizado!");
  }
}
