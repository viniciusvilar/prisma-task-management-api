import { Body, Controller, Get, Post } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dtos/CreateTask.dto';
import { Task } from '@prisma/client';

@Controller('task')
export class TaskController {

    constructor(private taskService: TaskService) {}

    @Post()
    async create(@Body() task : CreateTaskDto) {
        return await this.taskService.create(task)
    }

    @Get()
    async list(): Promise<Task[]> {
        return await this.taskService.list()
    }
}
