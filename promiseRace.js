function promiseRace(promises) {
    return new Promise((resolve, reject) => {
        for (const promise of promises) {
            Promise.resolve(promise).then(resolve).catch(reject);
        }
    });
}