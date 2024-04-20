import { type Express } from 'express';
import expressLoader from 'loaders/express';

interface Prop {
    expressApp: Express
}

export default async ({ expressApp }: Prop) => {
    await expressLoader(expressApp);
}