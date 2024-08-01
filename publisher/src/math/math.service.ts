import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { timeout } from 'rxjs';
import { MathDto } from 'src/math/dto/MathDto';

@Injectable()
export class MathService {
  @Inject('MATH_SERVICE') private client: ClientProxy;
  add(data: MathDto) {
    // Emit an event to the 'number-added' channel

    this.client.emit('number-added', data);

    return { message: `Number added : ${data.a + data.b}` };
  }

  get() {
    return this.client.send({ cmd: 'fetch-numbers' }, {}).pipe(timeout(5000));
  }
}
