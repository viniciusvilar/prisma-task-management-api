import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskController } from './task/task.controller';
import { TaskService } from './task/task.service';
import { PrismaClientService } from './prisma-client/prisma-client.service';

@Module({
  imports: [],
  controllers: [AppController, TaskController],
  providers: [AppService, TaskService, PrismaClientService],
})
export class AppModule {}
