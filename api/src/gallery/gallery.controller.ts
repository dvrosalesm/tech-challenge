import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { GalleryService } from './gallery.service';

@Controller()
export class GalleryController {
  constructor(private readonly galleryService: GalleryService) {}

  @Get('/photos')
  async getPhotos(): Promise<string[]> {
    return this.galleryService.getPhotos();
  }

  @Post('/photo')
  async savePhoto(): Promise<string> {
    return '';
  }

  @Put('/photo')
  async updatePhoto(): Promise<string> {
    return '';
  }

  @Delete('/gallery')
  async deletePhoto(): Promise<string> {
    return '';
  }
}
