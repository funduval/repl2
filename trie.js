const fs = require('fs');
const { promisify } = require('util')
const readFileAsync = promisify(fs.readFile);



class Node {
    constructor(){
      this.children = new Map();
      this.end = false;
      this.setEnd = function() {
        this.end = true;
      };
      this.isEnd = function() {
        return this.end;
      };
    }
  };
  
  class Trie {
  
      constructor(){
      this.root = new Node();
      }
    
  
      add (input, node = this.root) {
          if (input.length == 0) {
              node.setEnd();
              return;
          } else if (!node.children.has(input[0])) {
              node.children.set(input[0], new Node());
              return this.add(input.substr(1), node.children.get(input[0]));
          } else {
              return this.add(input.substr(1), node.children.get(input[0]));
          };
      };
  
      isWord (word) {
          let node = this.root;
          while (word.length > 1) {
              if (!node.children.has(word[0])) {
                  return false;
              } else {
                  node = node.children.get(word[0]);
                  word = word.substr(1);
              };
          };
          return (node.children.has(word) && node.children.get(word).isEnd()) ? 
        true : false;
      };
  
      print () {
          let words = new Array();
          let search = function(node, string) {
              if (node.children.size != 0) {
                  for (let letter of node.children.keys()) {
                      search(node.children.get(letter), string.concat(letter));
                  };
                  if (node.isEnd()) {
                      words.push(string);
                  };
              } else {
                  string.length > 0 ? words.push(string) : undefined;
                  return;
              };
          };
          search(this.root, new String());
          return words.length > 0 ? words : "no words to print";
    };
    
    openSearch(word) {
        var node = this.root;
        let flag = true;
        for(var i = 0; i < word.length; i++) {
            flag=false;

          if (node.children[word[i]]) {
            node = node.children[word[i]];
            flag=true;
          } else {
            flag=false
            return flag;
          }
        }
        return flag;
    };
  };
  
  let alphabetical = new Trie();
  let numeric = new Trie();

  let contacts;

const readContacts = async () => {
    try {
    let list = await readFileAsync('./contacts.json', 'utf-8');
    contacts = JSON.parse(list);
    contacts.forEach((contact)=>alphabetical.add(contact.name));
    contacts.forEach((contact)=>numeric.add(contact.number));
        
    }
    catch(err) {
        console.log("Error: ", err.message);

    }
    console.log(numeric.print());
    console.log(alphabetical.print());


   
}

readContacts();
 



 