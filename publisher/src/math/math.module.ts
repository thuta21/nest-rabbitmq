import { Module } from '@nestjs/common';
import { MathService } from './math.service';
import { MathController } from './math.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'MATH_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'calculate-queue',
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
  controllers: [MathController],
  providers: [MathService],
})
export class MathModule {}
