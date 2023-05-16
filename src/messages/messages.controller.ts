import { Controller, Get, Post, Body, Param } from '@nestjs/common'
import { CreateMessageDto } from './dtos/create-message.dto'

@Controller('messages')
export class MessagesController {
    @Get()
    listMessages() {

    }

    @Post()
    createMessage(@Body() body: CreateMessageDto) {
        console.log("Body >> ", body)
    }

    @Get('/:id')
    getMessage(@Param() id: string) {
        console.log("ID >> ", id)
    }
}
