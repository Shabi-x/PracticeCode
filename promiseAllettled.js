// function AllSettled(promiseArr) {
//   let count = 0;
//   let result = new Array();
//   return new Promise((resolve, reject) => {
//     promiseArr.forEach((item, index) => {
//       item.then(
//         (value) => {
//           count++;
//           result[index] = { status: "fulfilled", value: value };
//           if (count === promiseArr.length) {
//             resolve(result);
//           }
//         },
//         (reason) => {
//           count++;
//           result[index] = { status: "rejected", reason: reason };
//           if (count === promiseArr.length) {
//             resolve(result);
//           }
//         }
//       );
//     });
//   });
// }

function AllSettled(promiseArr) {
  let count = 0;
  let result = [];
  return new Promise((resolve, rejected) => {
    promiseArr.forEach((item, index) => {
      item.then(
        (res) => {
          count++;
          result[index] = { status: "fulfiled", value: res };
          if (promiseArr.length === count) {
            return resolve(result);
          }
        },
        (err) => {
          count++;
          result[index] = { status: "rejected", value: err };
          if (promiseArr.length === count) {
            return resolve(result);
          }
        }
      );
    });
  });
}
