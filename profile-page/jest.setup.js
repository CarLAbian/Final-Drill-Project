import '@testing-library/jest-dom';
import { server } from './mocks/server';
import { beforeAll, afterAll, afterEach } from '@jest/globals';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
