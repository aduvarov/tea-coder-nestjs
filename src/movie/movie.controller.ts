import {
    Body,
    Controller,
    Delete,
    Get,
    Headers,
    Param,
    Post,
    Put,
    Query,
    Req,
    Res,
} from '@nestjs/common';
import type { Request, Response } from 'express';
import { MovieService } from './movie.service';
import { MovieDto } from './dto/movie.dto';
import { IsNumberString } from 'class-validator';

@Controller('movies')
export class MovieController {
    constructor(private readonly movieService: MovieService) {}

    @Get()
    findAll() {
        return this.movieService.findAll();
    }

    @Get(':id')
    findById(@Param('id') id: string) {
        return this.movieService.findById(+id);
    }

    @Post()
    create(@Body() dto: MovieDto) {
        return this.movieService.create(dto);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() body: MovieDto) {
        return this.movieService.update(+id, body);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.movieService.delete(+id);
    }
}
