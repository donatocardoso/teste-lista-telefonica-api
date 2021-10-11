import { Body, Delete, Get, HttpError, JsonController, Param, Post, Put } from 'routing-controllers';
import ContatoDto from '../dtos/ContatoDto';
import Return from '../dtos/Return';
import HttpCode from '../enums/HttpCode';
import ContatoService from '../services/ContatoService';

@JsonController("/contato", { transformResponse: true  })
export class ContatoController {
  @Get('/')
  async getAll(): Promise<Return<ContatoDto[]>> {
    var retorno = await ContatoService.get();

    if (retorno.HttpCode != HttpCode.Ok)
      throw new HttpError(retorno.HttpCode, retorno.Message);

    return retorno;
  }

  @Get('/:id')
  async getById(@Param('id') id: number): Promise<Return<ContatoDto>> {
    var retorno = await ContatoService.getById(id);

    if (retorno.HttpCode != HttpCode.Ok)
      throw new HttpError(retorno.HttpCode, retorno.Message);

    return retorno;
  }

  @Get('/search/:text')
  async getByText(@Param('text') text: string): Promise<Return<ContatoDto[]>> {
    var retorno = await ContatoService.getByText(text);

    if (retorno.HttpCode != HttpCode.Ok)
      throw new HttpError(retorno.HttpCode, retorno.Message);

    return retorno;
  }

  @Post('/')
  async post(@Body() contato: ContatoDto): Promise<Return<ContatoDto>> {
    var retorno = await ContatoService.post(contato);

    if (retorno.HttpCode != HttpCode.Ok)
      throw new HttpError(retorno.HttpCode, retorno.Message);

    return retorno;
  }

  @Put('/:id')
  async put(@Param('id') id: number, @Body() contato: ContatoDto): Promise<Return> {
    var retorno = await ContatoService.put(id, contato);

    if (retorno.HttpCode != HttpCode.Ok)
      throw new HttpError(retorno.HttpCode, retorno.Message);

    return retorno;
  }

  @Delete('/:id')
  async remove(@Param('id') id: number): Promise<Return> {
    var retorno = await ContatoService.remove(id);

    if (retorno.HttpCode != HttpCode.Ok)
      throw new HttpError(retorno.HttpCode, retorno.Message);

    return retorno;
  }
}
