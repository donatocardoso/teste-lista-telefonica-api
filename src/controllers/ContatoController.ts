import { Body, Delete, Get, JsonController, Param, Post, Put } from 'routing-controllers';
import HttpStatus from '../enums/HttpStatus';
import Contato from '../models/contato';
import Return from '../models/Return';
import ContatoService from '../services/ContatoService';

@JsonController("", {transformResponse: false})
export class ContatoController {
  @Get('/contato')
  async getAll() {
    var retorno = await ContatoService.get();

    if (retorno.StatusCode != HttpStatus.Ok)
      return null;
    
    return retorno;
  }

  @Get('/contato/:id')
  async getOne(@Param('id') id: number): Promise<Return<Contato>> {
    var retorno = await ContatoService.getById(id);

    if (retorno.StatusCode != HttpStatus.Ok)
      return retorno;
    
    return retorno;
  }

  @Get('/contato/search/:text')
  getOneByText(@Param('text') text: number) {
    return 'essa ação retorna o contato com texto: ' + text;
  }

  @Post('/contato')
  post(@Body() contato: any) {
    return 'salvando contato...';
  }

  @Put('/contato/:id')
  put(@Param('id') id: number, @Body() contato: any) {
    return 'atualizando a contato...';
  }

  @Delete('/contato/:id')
  remove(@Param('id') id: number) {
    return 'removendo contato...';
  }
}
