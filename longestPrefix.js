/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length === 0) return '';

    let res = "";

    //outer loop loops through only first word, because "longest prefix" can only be as long as shortest word. So, if first word is shortest, it won't matter.

    for (let i = 0; i < strs[0].length; i++) {
        //innerloop loops through rest of the array. Inner loop is "slower."

        for (let j = 1; j < strs.length; j++) {
            if (strs[0][i] !== strs[j][i]) {
                return res;

            }
        }
        res += strs[0][i];

    }
    return res

};

