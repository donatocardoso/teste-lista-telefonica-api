import "class-transformer";
import path from 'path';
import "reflect-metadata";
import { createExpressServer } from 'routing-controllers';
import TypeOrmConnection from './connections/TypeOrm';

const API_PORT = process.env.API_PORT || 8080;

if (process.env.NODE_ENV !== 'test') {
    TypeOrmConnection.init((conn) => {
        const app = createExpressServer({
            classTransformer: true,
            validation: false,
            routePrefix: '/api/toki-toki',            
            controllers: [path.join(__dirname, '/src/controllers/**/*')],
        });
        
        app.listen(API_PORT, () => console.log(`Servidor online na porta ${API_PORT}...`))
    });
}
