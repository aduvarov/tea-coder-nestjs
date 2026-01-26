import {
    IsArray,
    IsEnum,
    IsInt,
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsPositive,
    IsString,
    IsUrl,
    IsUUID,
    Length,
    Matches,
    MinLength,
} from 'class-validator';
import { StartsWith } from '../decorators/start-with.decorator';

export enum TaskTag {
    WORK = 'work',
    STUDY = 'study',
    HOME = 'home',
}
export class CreateTaskDto {
    @IsString()
    @IsNotEmpty()
    @StartsWith('Task:')
    @Length(2, 25)
    title: string;

    @IsString({ message: 'Описание должно быть строкой' })
    @IsOptional()
    description: string;

    // @IsNumber({}, { message: 'Приоритет должен быть числом' })
    @IsInt({ message: 'Приоритет должен быть целым числом' })
    @IsPositive({ message: 'Приоритет должен быть положительным числом' })
    @IsOptional()
    priority: number;

    @IsArray({ message: 'Теги должны быть массивом' })
    // @IsString({ message: 'Каждый тег должен быть строкой', each: true })
    @IsEnum(TaskTag, { message: 'Недопустимое значение тега', each: true })
    @IsOptional()
    tags: TaskTag[];

    // @IsString()
    // @MinLength(8, { message: 'Пароль должен содержать минимум 8 симоволов' })
    // @Matches(/^(?=.*[A-Z])(?=.*[0-9]).+$/, {
    //     message:
    //         'Пароль дложен содеражать хотябы одну заглавную букву и хотябы одну цифру',
    // })
    // password: string;

    // @IsUrl(
    //     {
    //         protocols: ['https'],
    //         require_protocol: false,
    //         require_port: false,
    //         require_valid_protocol: false,
    //         host_whitelist: ['google.com', 'teacoder.ru'],
    //         host_blacklist: ['ya.ru'],
    //     },
    //     { message: 'Некоректный формат URL' },
    // )
    // websiteUrl: string;

    // @IsUUID('4', { message: 'Некоректный формат UUID' })
    // userId: string;
}
