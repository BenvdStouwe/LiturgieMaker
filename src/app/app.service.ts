import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
  private title = 'LiturgieMaker';
  private startingYear = 2018;

  getTitle(): string {
    return this.title;
  }

  getStartingYear(): number {
    return this.startingYear;
  }
}
