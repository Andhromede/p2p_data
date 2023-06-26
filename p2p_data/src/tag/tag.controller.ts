import { Controller, Get, Post, Put, Body, Param, Delete } from '@nestjs/common';
import { TagService } from './tag.service';
import { Tag } from 'src/entities/tag.entity';

@Controller('tag')
export class TagController {
    constructor(private readonly tagService: TagService) {}

    @Get()
    getAllTags(){
        return this.tagService.getAllTags();
    }

    @Get(':id')
    getTagById(@Param('id') tagId : number) {
        return this.tagService.getTagById(tagId);
    }

    @Post()
    async createTag(
        @Body('title') name: string
    ) : Promise<Tag> {
        const generatedTag = await this.tagService.createTag(name);
        return generatedTag;
    }

    @Put(':id')
    async updateTag(
        @Param('id') tagId: number,
        @Body('title') name: string,
        @Body('isActive') isActive: boolean
    ) : Promise<Tag> {
        const updatedTag = await this.tagService.updateTag(tagId, name, isActive);
        return updatedTag;
    }

    @Delete(':id')
    deleteTag(@Param('id') tagId: number){
        return this.tagService.deleteTag(tagId);
    }
}
