import { IsEnum, IsString } from "class-validator"
import { TaskStatusEnum } from "../enum/TaskStatusEnum"

export class UpdateTaskDto {
    @IsString()
    title?: string

    @IsString()
    description?: string

    @IsEnum(TaskStatusEnum)
    status?: TaskStatusEnum
}