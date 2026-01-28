import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
} from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieDto } from './dto/movie.dto';

@Controller('movies')
export class MovieController {
    constructor(private readonly movieService: MovieService) {}
    @Post()
    create(@Body() dto: MovieDto) {
        return this.movieService.create(dto);
    }

    @Get()
    findAll() {
        return this.movieService.findAll();
    }

    @Get(':id')
    findById(@Param('id') id: string) {
        return this.movieService.findById(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() body: MovieDto) {
        return this.movieService.update(id, body);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.movieService.delete(id);
    }
}
