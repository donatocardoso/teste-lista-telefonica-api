import { Body, Delete, Get, JsonController, Param, Post, Put } from 'routing-controllers';
import HttpCode from '../enums/HttpCode';
import Contato from '../models/contato';
import Return from '../models/Return';
import ContatoService from '../services/ContatoService';

@JsonController("", { transformResponse: false })
export class ContatoController {
  @Get('/contato')
  async getAll() {
    var retorno = await ContatoService.get();

    if (retorno.HttpCode != HttpCode.Ok)
      return null;

    return retorno;
  }

  @Get('/contato/:id')
  async getOne(@Param('id') id: number): Promise<Return<Contato>> {
    var retorno = await ContatoService.getById(id);

    if (retorno.HttpCode != HttpCode.Ok)
      return retorno;

    return retorno;
  }

  @Get('/contato/search/:text')
  async getByText(@Param('text') text: string) {
    var retorno = await ContatoService.getByText(text);

    if (retorno.HttpCode != HttpCode.Ok)
      return retorno;

    return retorno;
  }

  @Post('/contato')
  async post(@Body() contato: Contato) {
    var retorno = await ContatoService.post(contato);

    if (retorno.HttpCode != HttpCode.Ok)
      return retorno;

    return retorno;
  }

  @Put('/contato/:id')
  async put(@Param('id') id: number, @Body() contato: Contato) {
    var retorno = await ContatoService.put(id, contato);

    if (retorno.HttpCode != HttpCode.Ok)
      return retorno;

    return retorno;
  }

  @Delete('/contato/:id')
  async remove(@Param('id') id: number) {
    var retorno = await ContatoService.remove(id);

    if (retorno.HttpCode != HttpCode.Ok)
      return retorno;

    return retorno;
  }
}
