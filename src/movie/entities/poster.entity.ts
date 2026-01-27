import {
    Column,
    CreateDateColumn,
    Entity,
    Generated,
    OneToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { MovieEntity } from './movie.entity';

@Entity({ name: 'movie_posters' })
export class MoviePosterEntity {
    @PrimaryGeneratedColumn('uuid')
    @Generated('uuid')
    id: string;

    @Column({ type: 'varchar', length: 255 })
    url: string;

    @OneToOne(() => MovieEntity, (movie) => movie.poster)
    movie: MovieEntity;

    @CreateDateColumn({
        name: 'created_at',
    })
    createdAt: Date;
}
