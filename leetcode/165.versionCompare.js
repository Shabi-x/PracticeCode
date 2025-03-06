var compareVersion = function (version1, version2) {
    const arr1 = version1.split('.')
    const arr2 = version2.split('.')
    const len1 = arr1.length
    const len2 = arr2.length

    for (let i = 0; i < Math.max(len1, len2); i++) {
        arr1[i] = i > len1 ? 0 : Number(arr1[i])
        arr2[i] = i > len2 ? 0 : Number(arr2[i])
        if (arr1[i] > arr2[i]) return 1
        if (arr1[i] < arr2[i]) return -1
    }
    return 0
};