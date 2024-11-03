class LRU {
  constructor(capacity) {
    this.map = new Map();
    this.capacity = capacity;
  }
  get(key) {
    if (this.map.has(key)) {
      const tempValue = this.map.get(key);
      this.map.delete(key);
      this.map.set(key, tempValue);
      return tempValue;
    } else {
      return -1;
    }
  }

  set(key, value) {
    if (this.map.has(key)) {
      this.map.delete(key);
      this.map.set(key, value);
    } else {
      if (this.capacity < this.map.size) {
        this.map.delete(this.map.keys().next());
        this.map.set(key, value);
      } else {
        this.map.set(key, value);
      }
    }
  }
}
