import { IsNotEmpty } from '@nestjs/class-validator';
import { Exclude, Expose } from 'class-transformer';

export class CreateTodo {
  @IsNotEmpty()
  title: string;
  @IsNotEmpty()
  description: string;
}
