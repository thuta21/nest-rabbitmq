import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {
  Ctx,
  EventPattern,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';
import { MathDto } from 'src/dto/MathDto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern('number-added')
  handleAdd(@Payload() data: MathDto) {
    return this.appService.handleAdd(data);
  }

  @MessagePattern({ cmd: 'fetch-numbers' })
  handleGet(@Ctx() context: RmqContext): number[] {
    // console.log(context.getMessage());
    return this.appService.handleGet();
  }
}
