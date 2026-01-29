import { ApiProperty } from '@nestjs/swagger';

export class MovieResponse {
    @ApiProperty({
        description: 'ID фильма',
        example: 123456,
        type: String,
    })
    id: string;

    @ApiProperty({
        description: 'Название фильма',
        example: 'Fight Club',
        type: String,
    })
    title: string;
}
