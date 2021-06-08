import { cache } from "./Pattern_singleton.js";

export class SecondSingleton {
  constructor() {
    console.log(cache.get("book"));
  }
}
