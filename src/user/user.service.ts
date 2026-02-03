import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    private users = [
        { id: 1, username: 'John Doe', email: 'john.doe@teacoder.ru' },
        { id: 2, username: 'Bob', email: 'bob@teacoder.ru' },
        { id: 3, username: 'Vadim', email: 'vadim@teacoder.ru' },
    ];

    findAll() {
        return this.users;
    }
}
