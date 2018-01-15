import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
  private title = 'LiturgieMaker';
  private startingYear = 2018;

  public getTitle(): string {
    return this.title;
  }

  public getStartingYear(): number {
    return this.startingYear;
  }
}
