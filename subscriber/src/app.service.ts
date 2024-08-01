import { Injectable } from '@nestjs/common';
import { MathDto } from 'src/dto/MathDto';

@Injectable()
export class AppService {
  numbers: number[] = [];

  handleAdd(data: MathDto): string {
    console.log('Event received');

    console.log(`Adding numbers: ${data.a} + ${data.b}`);
    this.numbers.push(data.a + data.b);
    return `Number added: ${data.a + data.b}`;
  }

  handleGet(): number[] {
    return this.numbers;
  }
}
