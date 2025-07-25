export const hyperscript = (tag, attrs, children="") => {
    const HasChildren = !!children;

    if(tag){
        children = ',""' + children + ',""'
        const splitted = splitQuotedLines(children);
        children = insertBetween(splitted, 'van.tags.br()')
        children[children.length - 1] = children.at(-1).slice(0, -3)
        children[0] = children.at(0).slice(3)
    }
    return `van.tags.${tag}(${attrs}${HasChildren ?`, ${children}` : ""})`
}

function splitQuotedLines(str) {
  return str
    .slice(1, -1)                        
    .split(/\r\n|\r|\n/)                
    .map(line => `"${line}"`);          
}

function insertBetween(arr, value) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i]);
    if (i < arr.length - 1) {
      result.push(value);
    }
  }
  return result;
}