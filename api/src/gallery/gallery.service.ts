import { Injectable } from '@nestjs/common';

@Injectable()
export class GalleryService {
  async getPhotos(): Promise<string[]> {
    return [];
  }

  async savePhoto(): Promise<string> {
    return '';
  }

  async updatePhoto(): Promise<string> {
    return '';
  }

  async deletePhoto(): Promise<string> {
    return '';
  }
}
