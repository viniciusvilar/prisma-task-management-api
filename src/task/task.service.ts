import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dtos/CreateTask.dto';
import { Task } from '@prisma/client';
import { PrismaService } from 'src/prisma-client/prisma-client.service';

@Injectable()
export class TaskService {

    constructor(private prismaService : PrismaService) {}

    async create(createTaskDto : CreateTaskDto) {
        try {
            const task = await this.prismaService.task.create({
                data: createTaskDto
            })
    
        } catch (error) {
            throw new HttpException(
                {
                  message: 'An error occurred while creating the task.',
                  details: error.message,
                },
                HttpStatus.BAD_REQUEST,
            );
        }
    }

    async list(): Promise<Task[]> {
        try {
            const tasks = await this.prismaService.task.findMany()
            return tasks
    
        } catch (error) {
            throw new HttpException(
                {
                  message: 'An error occurred while creating the task.',
                  details: error.message,
                },
                HttpStatus.BAD_REQUEST,
            );
        }
    }

}
