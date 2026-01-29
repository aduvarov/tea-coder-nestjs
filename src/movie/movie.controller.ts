import { Body, Controller, Get, HttpStatus, Post } from '@nestjs/common';
import { MovieService } from './movie.service';
import {
    ApiBody,
    ApiHeader,
    ApiNotFoundResponse,
    ApiOperation,
    ApiParam,
    ApiQuery,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger';
import { CreateMovieRequest } from './dto/create-movie.dto';
import { MovieResponse } from './dto/movie.dto';

@ApiTags('Movie')
@Controller('movies')
export class MovieController {
    constructor(private readonly movieService: MovieService) {}

    @ApiOperation({
        summary: 'Получить список фильмов',
        description: 'Возвращает список со всеми активными фильмами',
    })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Фильмы найдены',
        type: [MovieResponse],
    })
    @Get()
    findAll() {
        return [
            {
                id: 1,
                title: 'Fight Club',
            },
            {
                id: 2,
                title: 'Pulp Fiction',
            },
        ];
    }

    @ApiOperation({
        summary: 'Получить фильм по id',
        description: 'Возвращает информацию о фильмы',
    })
    @ApiParam({ name: 'id', type: 'string', description: 'Id фильма' })
    @ApiQuery({ name: 'year', type: 'number', description: 'Фильтр по году' })
    @ApiHeader({ name: 'X-Auth-Token', description: 'Token авторизации' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Фильм найден',
        type: MovieResponse,
    })
    @ApiNotFoundResponse({
        description: 'Фильм не найден',
        example: {
            status: 404,
            message: 'Movie Not Found',
            timestamp: '2026-01-29',
            path: '/movie/123',
        },
    })
    @Get(':id')
    findById() {
        return {
            id: 1,
            title: 'Fight Club',
        };
    }

    @ApiOperation({ summary: 'Создать фильм' })
    // @ApiBody({
    //     schema: {
    //         type: 'object',
    //         properties: {
    //             title: {
    //                 type: 'string',
    //                 example: 'Fight Club',
    //             },
    //         },
    //     },
    // })
    @Post()
    create(@Body() dto: CreateMovieRequest) {
        return dto;
    }
}
