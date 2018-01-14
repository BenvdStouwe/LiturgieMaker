import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
  private title = 'LiturgieMaker';

  public getTitle(): string {
    return this.title;
  }
}
