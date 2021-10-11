import { Get, JsonController } from 'routing-controllers';
import Return from '../dtos/Return';
import HttpCode from '../enums/HttpCode';

@JsonController("/", { transformResponse: true })
export class PingController {
  @Get('/')
  async get() {
    const PORT = process.env.PORT || 8080;

    return new Return(HttpCode.Ok, 'Servidor online na porta ' + PORT, { date: new Date() });
  }
}
