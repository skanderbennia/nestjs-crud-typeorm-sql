import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateTodo } from 'src/todos/dto/CreateTodo.dto';
import { TodosService } from 'src/todos/services/todos/todos.service';

@Controller('todos')
export class TodosController {
  constructor(private todoService: TodosService) {}

  @Get()
  getAllTodo() {
    return this.todoService.getAllTodo();
  }

  @Post()
  createTodo(@Body() createTodoDetail: CreateTodo) {
    return this.todoService.createTodo(createTodoDetail);
  }
}
