import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common'
import { CreateMessageDto } from './dtos/create-message.dto'
import { MessagesService } from './messages.service'

interface Repository {
    findOne(id: string)
    findAll()
    create(content: string)
}

@Controller('messages')
export class MessagesController {
    messagesService: MessagesService

    constructor() {
        // The Controller is creating its own dependencies
        // DONT DO THIS ON REAL APPS
        this.messagesService = new MessagesService()
    }

    @Get()
    listMessages() {
        return this.messagesService.findAll()
    }

    @Post()
    createMessage(@Body() body: CreateMessageDto) {
        const content = body.content
        return this.messagesService.create(content)
    }

    @Get('/:id')
    async getMessage(@Param('id') id: string) {

        const message = await this.messagesService.findOne(id)

        if(!message) {
            throw new NotFoundException('message not found')
        }
        return message
    }
}
