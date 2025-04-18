import { setupServer } from 'msw/node';
import { mockHandler } from './handler';

export const server = setupServer(...mockHandler);
