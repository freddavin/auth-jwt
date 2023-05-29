import config from 'config';
import { start } from './libs/service';

const port = config.get<number>('API_PORT');

start(port);
