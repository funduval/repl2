var isValid = function(s) {
    let map = {
        ")": "(",
        "]": "[",
        "}": "{"
    }
    let arr = [];
    for(let i = 0; i < s.length; i ++){
        if(s[i] === "(" || s[i] === "[" || s[i] === "{"){
            console.log("pushing opening bracket into array", s[i])
            arr.push(s[i]);
        }
        else{
            if(arr[arr.length - 1] === map[s[i]]){
                console.log("last char is opening bracket so pop it", map[s[i]])
                arr.pop();
            }
            else return false;
        }
    }
    console.log("arr.length", arr.length)
    return arr.length === 0 ? true : false;
};

console.log(isValid('{[()[]]}'))
