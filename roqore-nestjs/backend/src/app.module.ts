// src/app.module.ts
import { Module } from '@nestjs/common';
import { TestController } from './controllers/test.controller'; // adjust path
import { ApiKeyGuard } from './guard/api-key.guard';

@Module({
  imports: [],
  controllers: [TestController],
  providers: [ApiKeyGuard],
})
export class AppModule {}
