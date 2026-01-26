import {
    Body,
    Controller,
    Get,
    Headers,
    Param,
    Post,
    Query,
    Req,
    Res,
} from '@nestjs/common';
import type { Request, Response } from 'express';

@Controller('movies')
export class MovieController {
    @Get()
    findAll(@Query() query: any) {
        return JSON.stringify(query);
    }

    @Get(':id/asdf/:reviewId')
    findById(@Param('id') id: string, @Param('reviewId') reviewId: string) {
        return { id, reviewId };
    }

    @Post()
    create(@Body() body: { title: string; genre: string }) {
        return body;
    }

    @Get('headers')
    getHeaders(@Headers() headers: any) {
        return headers;
    }

    @Get('useragent')
    getUserAgent(@Headers('user-agent') userAgent: string) {
        return { userAgent };
    }

    @Get('request')
    getRequestDetails(@Req() req: Request) {
        return {
            method: req.method,
            url: req.url,
            headers: req.headers,
            query: req.query,
            params: req.params,
        };
    }

    @Get('response')
    getResponseDetails(@Res() res: Response) {
        res.status(201).json({ message: 'Hello' });
    }
}
