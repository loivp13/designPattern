class MiniCache {
  constructor() {
    if (MiniCache.instance == null) {
      this.cache = {};
      MiniCache.instance = this;
    }
    return MiniCache.instance;
  }
  add(key, value) {
    this.cache[key] = value;
  }
  remove(key) {
    delete this.cache[key];
  }
  get(key) {
    return this.cache[key];
  }
}

const cache = new MiniCache();
Object.freeze(cache);

export { cache };
