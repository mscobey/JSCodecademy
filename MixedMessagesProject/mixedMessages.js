const words1 = ['You','It','She','He','They'];
const words2 = [' are',' was',' were',' has',' been'];
const words3 = [' going',' wanting',' deciding',' planning',' running'];
const words4 = [' to',' from',' a',' the',' as'];
const words5 = [' a',' school',' love',' work',' house'];
const words6 = [' feverishly',' quickly',' slowly',' drunkenly',' cheerfully'];
const words =[words1,words2,words3,words4,words5,words6];

let output='';
for(let i=0;i<words.length;i++){
    output+=words[i][Math.floor(Math.random()*words[i].length)];
}
console.log(output);


