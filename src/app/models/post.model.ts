export class Post {

    id: number;
    loveIts: number;
    createdAt: Date;

    constructor(public title: string, public content: string) {
      this.loveIts = 0;
      this.createdAt = new Date();
    }
}
