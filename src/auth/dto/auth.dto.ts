import { ApiProperty } from '@nestjs/swagger';

export class AuthResponse {
    @ApiProperty({
        description: 'JWT access token',
        example:
            'asfjJJkjmkeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30asjdfkasf8u345kjksadf98kjsajf908kJKjasf9idf',
    })
    accessToken: string;
}
