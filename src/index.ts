import config from 'config';
import { server } from './libs/service';

const port = config.get<number>('API_PORT');

server(port);
