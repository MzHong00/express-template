import express, { type Express } from 'express';
import cors from 'cors';

import routes from 'api/route'

export default (app: Express) => {
    app.use(cors());
    app.use(express.json());
    app.use('/api', routes);
}
