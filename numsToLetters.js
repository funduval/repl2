let numbersToLetters = function(nums) {
    if(!nums.length) return [];
    
    let map = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z'],
    }
    
    let result = [];
    
    function associate(string, index) {
        if(index === nums.length) {
            result.push(string);
            return;
        }
        
        for(let x of map[nums[index]]) {
            associate(string+x, index+1);
        }
    }
    associate('', 0);
    return result;
};

console.log(numbersToLetters("23"))