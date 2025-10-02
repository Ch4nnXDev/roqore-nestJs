import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { ApiKeyGuard } from '../guard/api-key.guard';

interface TestDto {
  name: string;
  msg: string;
}

@Controller('api/test')
@UseGuards(ApiKeyGuard)
export class TestController {
  @Get()
  getTest() {
    return { message: 'Hello from GET /api/test' };
  }

  @Post()
  postTest(@Body() body: TestDto) {
    return { received: body };
  }
}
