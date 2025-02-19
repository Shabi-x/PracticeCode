// class LRU {
//   constructor(capacity) {
//     this.capacity = capacity;
//     this.map = new Map();
//   }
//   get(key) {
//     if (this.map.has(key)) {
//       const value = this.map.get(key);
//       this.map.delete(key);
//       this.map.set(key, value);
//       return value;
//     } else {
//       return -1;
//     }
//   }

//   Set(key, value) {
//     if (this.map.has(key)) {
//       this.map.delete(key);
//       this.map.set(key, value);
//     } else {
//       if (this.capacity >= this.map.size) {
//         this.map.delete(this.map.keys().next().value);
//         this.map.set(key, value);
//       } else {
//         this.map.set(key, value);
//       }
//     }
//   }
// }

//

//
//
//

//
//
//
//
//
//
// class LRU {
//   constructor(capacity) {
//     this.capacity = capacity;
//     this.map = new Map();
//   }

//   get(key) {
//     if (this.map.has(key)) {
//       const value = this.map.get(key);
//       this.map.delete(key);
//       this.map.set(key, value);
//       return value;
//     } else {
//       return -1;
//     }
//   }

//   set(key, value) {
//     if (this.map.has(key)) {
//       this.map.delete(key);
//       this.map.set(key, value);
//     } else {
//       if (this.capacity < this.map.size) {
//         this.map.delete(this.map.keys().next().value);
//         this.map.set(key, value);
//       } else {
//         this.map.set(key, value);
//       }
//     }
//   }
// }

class LRU {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();
  }
  set(key, value) {
    if (this.map.has(key)) {
      this.map.delete(key);
      this.map.set(key, value);
    }else{
      if(this.map.size>this.capacity){
        this.map.delete(this.map.keys().next().value)
        this.map.set(key,value)
      }else{
        this.map.set(key,value)
      }
    }
  }

  get(key) {
    if (this.map.has(key)) {
      const value = this.map.get(key);
      this.map.delete(key);
      this.map.set(key, value);
      return value;
    } else {
      return -1;
    }
  }
}
