// Parse string into XML and query XML and return
const parser = new DOMParser();
const xmlDoc = parser.parseFromString({{string}},"text/xml");
let stuff = xmlDoc.querySelectorAll('{{selector}}');
let arr = [];
stuff.forEach(function(el){arr.push(el.textContent)})
return arr;
