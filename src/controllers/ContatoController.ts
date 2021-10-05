import { Body, Controller, Delete, Get, Param, Post, Put } from 'routing-controllers';

@Controller()
export class ContatoController {
  @Get('/contato')
  getAll() {
    return 'essa ação retorna todos os contatos';
  }

  @Get('/contato/:id')
  getOne(@Param('id') id: number) {
    return 'essa ação retorna o contato #' + id;
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
