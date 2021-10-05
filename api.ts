import path from 'path';
import "reflect-metadata";
import { createExpressServer } from 'routing-controllers';

const app = createExpressServer({
    routePrefix: '/api/toki-toki',
    controllers: [path.join(__dirname, '/src/controllers/*.ts')],
});

app.listen(8080, () => console.log('Servidor online...'));
