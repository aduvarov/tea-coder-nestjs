import { ActorEntity } from 'src/actor/entities/actor.entity';
import { ReviewEntity } from 'src/review/entities/review.entity';
import {
    Column,
    CreateDateColumn,
    Entity,
    Generated,
    JoinTable,
    ManyToMany,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

export enum Genre {
    ACTION = 'action',
    COMEDY = 'comedy',
    DRAMA = 'drama',
    HORROR = 'horror',
}

@Entity({ name: 'movies' })
export class MovieEntity {
    @PrimaryGeneratedColumn('uuid')
    @Generated('uuid')
    id: string;

    @Column({
        type: 'varchar',
        length: 128,
        nullable: false,
    })
    title: string;

    @Column({
        type: 'text',
        nullable: true,
    })
    description: string;

    @Column({
        name: 'release_year',
        type: 'int',
        unsigned: true,
    })
    releaseYear: number;

    @Column({
        type: 'decimal',
        precision: 3,
        scale: 1,
        default: 0.0,
    })
    rating: number;

    @Column({
        name: 'is_available',
        type: 'boolean',
        default: false,
    })
    isAvailable: boolean;

    @CreateDateColumn({
        name: 'created_at',
    })
    createdAt: Date;

    @OneToMany(() => ReviewEntity, (review) => review.movie)
    reviews: ReviewEntity[];

    @ManyToMany(() => ActorEntity, (actor) => actor.movies)
    @JoinTable({
        name: 'movie_actors',
        joinColumn: { name: 'movie_id', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'actor_id', referencedColumnName: 'id' },
    })
    actors: ActorEntity[];

    @UpdateDateColumn({
        name: 'updated_at',
    })
    updatedAt: Date;

    @Column({
        type: 'enum',
        enum: Genre,
        default: Genre.DRAMA,
    })
    genre: Genre;
}
