import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from 'src/typeorm/entities/Todo';
import { CreateTodoParam } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo) private readonly todoRepository: Repository<Todo>,
  ) {}

  getAllTodo() {
    return this.todoRepository.find();
  }
  createTodo(createTodoDetail: CreateTodoParam) {
    const newTodo = this.todoRepository.create(createTodoDetail);
    return this.todoRepository.save(newTodo);
  }
}
