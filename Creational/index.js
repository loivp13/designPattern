import { cache } from "./Pattern_singleton.js";

export class FirstSingleton {
  constructor() {
    cache.add("book", "Harry Potter");
  }
}
