import "class-transformer";
import path from 'path';
import "reflect-metadata";
import { createExpressServer } from 'routing-controllers';
import TypeOrmConnection from './src/connections/TypeOrm';

const PORT = process.env.PORT || 8080;

if (process.env.NODE_ENV !== 'test') {
    TypeOrmConnection.init((conn) => {
        const app = createExpressServer({
            classTransformer: true,
            routePrefix: '/api/toki-toki',            
            controllers: [path.join(__dirname, '/src/controllers/**/*')],
        });
        
        app.listen(PORT, () => console.log(`Servidor online na porta ${PORT}...`))
    });
}
