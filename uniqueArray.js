/**
 * 不用set的数组去重
 */

function uniqueArray1(arr){
    let result = [];
    for(let i=0;i<arr.length;i++){
        if(!result.includes(arr[i])){
            result.push(arr[i]);
        }
    }
    return result
}

function uniqueArray2(arr){
    return arr.filter((item,index)=>arr.indexOf(item)===index)
    //indexOf返回是这个元素首次出现的位置，如果当前就是首次就保留
}

const uniqueArray3 =(arr)=>{
    return arr.filter((item,index)=>{
        arr.indexOf(item) ===index
    })
}