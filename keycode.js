let digit_map = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
}

function wordNumbers(input){
  input = str(input);
  let res = ['']
  for (char in input){
    letters = digit_map.get(char, '')
    res = [prefix+letter for prefix in res for letter in letters]
  return res
  }
}

wordNumbers(5,6,7);