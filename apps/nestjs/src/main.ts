import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableShutdownHooks();

  const port = parseInt(process.env.PORT ?? '3001', 10);

  // Release the port before the process exits so `nest start --watch`
  // restarts (which SIGTERM the old process) don't hit EADDRINUSE.
  const shutdown = async () => {
    await app.close();
    process.exit(0);
  };
  process.once('SIGTERM', shutdown);
  process.once('SIGINT', shutdown);

  await app.listen(port);
}
bootstrap();
