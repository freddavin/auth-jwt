import config from 'config';
import { createLogger, format, transports } from 'winston';
import { name, version } from '../../../package.json';

const { combine, timestamp, prettyPrint } = format;
const level = config.get<string>('LOG_LEVEL');

const myFormat = format((info) => {
  info.project = name;
  info.version = version;
  return info;
});

export const logger = createLogger({
  level,
  format: combine(
    timestamp({
      format: 'DD-MM-YYYY HH:mm:ss',
    }),
    myFormat(),
    prettyPrint()
  ),

  transports: [new transports.Console()],
});
