import "class-transformer";
import path from 'path';
import "reflect-metadata";
import { createExpressServer } from 'routing-controllers';
import TypeOrmConnection from './connections/TypeOrm';

const PORT = process.env.PORT || 8080;

if (process.env.NODE_ENV !== 'test') {
    TypeOrmConnection.init((conn) => {
        const app = createExpressServer({
            cors: true,
            classTransformer: true,
            validation: false,
            routePrefix: '/api/toki-toki',            
            controllers: [path.join(__dirname, '/controllers/**/*')],
        });
        
        app.listen(PORT, () => console.log(`Servidor online na porta ${PORT}...`))
    });
}
