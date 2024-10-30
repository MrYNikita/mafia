import app from '#app';
import https from 'https';
import config from '#config';

const options = {
  key: config.server.key,
  cert: config.server.cert,
};

const server = https
  .createServer(options, app)
  .listen(config.server.port, config.server.host, () => {
    console.log(
      `Сервер запущен по адресу: https://${config.server.host}:${config.server.port}`
    );
  });
