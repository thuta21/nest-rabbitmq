import { Body, Controller, Get, Post } from '@nestjs/common';
import { MathService } from './math.service';
import { MathDto } from 'src/math/dto/MathDto';

@Controller('math')
export class MathController {
  constructor(private readonly mathService: MathService) {}

  @Post('add')
  addNumbers(@Body() data: MathDto) {
    return this.mathService.add(data);
  }

  @Get('get')
  getNumbers() {
    return this.mathService.get();
  }
}
