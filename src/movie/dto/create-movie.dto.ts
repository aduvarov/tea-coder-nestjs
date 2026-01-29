import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateMovieRequest {
    @ApiProperty({
        description: 'Название фильма',
        example: 'Fight Club',
        type: String,
    })
    title: string;

    @ApiProperty({
        description: 'Год релиза фильма',
        example: '1999',
        type: Number,
    })
    releaseYear: number;

    @ApiPropertyOptional({
        description: 'Ссылка на постер фильма',
        example: 'https://storage.example.com/posters/13456.jpg',
        type: String,
    })
    poster?: string;

    @ApiProperty({
        description: 'ID актёров',
        example: ['123456', '6789'],
        type: [String],
    })
    actorsIds: string[];
}
