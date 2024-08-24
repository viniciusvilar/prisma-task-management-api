import { IsDateString, IsString } from "class-validator"

export class CreateTaskDto {
    @IsString()
    title: string

    @IsString()
    description: string

    @IsDateString()
    expiration_time: Date
}