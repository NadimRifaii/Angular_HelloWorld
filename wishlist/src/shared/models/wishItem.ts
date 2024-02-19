export class WishItem {
  constructor(public wishText: string, public isCompleted: boolean = false) {
    this.wishText = wishText;
    this.isCompleted = isCompleted;
  }
}