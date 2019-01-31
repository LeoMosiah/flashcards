export class Deck {
  constructor(title, id = Date.now(), questions = []) {
    this.title = title;
    this.id = id;
    this.questions = questions;
  }
}
