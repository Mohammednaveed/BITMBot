import {patterns,keywords,data } from './data.js';
const chatbox = document.getElementById("chatbox");
const messageInput = document.getElementById("message");
const sendButton = document.getElementById("send");
var len1,len2;
messageInput.addEventListener("keypress",event => {
  if(event.code === "Space"){
      var messarray = [];
    var message = messageInput.value.trim();
    const qwords = message.toLowerCase().split(/\W+/);
    len2 = qwords.length
    console.log(len2);
    if (len1 !== len2){
      var len3 = len1;
      for (let mes of qwords){
        if (len3>0){
          messarray.push(mes);
          len3 = len3-1;
        }
        else
          messarray.push(correct(mes));
      }
      messageInput.value = messarray.join(' ');
      len1=len2;
    }
  }
})
sendButton.addEventListener("click",()=>{
  sendmessage();
});

function sendmessage(){
  var messarray = [];
  var message = messageInput.value.trim();
  const qwords = message.toLowerCase().split(/\W+/);
  for (let mes of qwords)
    messarray.push(mes);
  message = messarray.join(' ');
  if (message) {
    const messageElement = document.createElement("div"); //Select sent message div and print in ChatBox
    messageElement.classList.add("message", "sent");
    messageElement.innerHTML = `<p>${message}</p>`;
    chatbox.appendChild(messageElement);
    // const messagerec = document.getElementsByName("message received");
    const messagerec = document.createElement("div"); // Print the Result of Question in ChatBox
    messagerec.classList.add("message", "received");
    messagerec.innerHTML = `<div align="right" > <p>${'<br>' + matchQuestion(message)}</p> </div>`; // Calling Function
    chatbox.appendChild(messagerec);
 
    chatbox.scrollTop = chatbox.scrollHeight;
    messageInput.value = "";
    len1 =0;
    len2 =0;
    addbuttons(message);
    // addButtonsWithDelay(message);
  }
}

messageInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    sendButton.click();
  }
});

 // Call the function to add buttons with the desired delay and animation

function addbuttons(str1){
  var msg = str1;
  addoptionsstring = [];
  for(let pattern of patterns){
    if(getSimilarity(str1,pattern)>0.15)
    addoptionsstring.push(pattern);
    console.log(getSimilarity(str1,pattern));
  }
  if(addoptionsstring.length>0){
    
    for(var i=0;i<addoptionsstring.length;i++){
      const newButton = document.createElement('button')  ;
      newButton.innerText = addoptionsstring[i];
      newButton.classList.add('btn', 'btn-outline-secondary', 'animate__animated', 'animate__fadeIn', 'delay-2s');
      newButton.addEventListener('click', () => {
        respond(newButton.innerText);
        });
        chatbox.appendChild(newButton);
        if(i==3)
          break;
    }
  }
}
function respond(data){
  var message= data;
  if (message) {
    const messageElement = document.createElement("div"); //Select sent message div and print in ChatBox
    messageElement.classList.add("message", "sent");
    messageElement.innerHTML = `<p>${message}</p>`;
    chatbox.appendChild(messageElement);
    // const messagerec = document.getElementsByName("message received");
    const messagerec = document.createElement("div"); // Print the Result of Question in ChatBox
    messagerec.classList.add("message", "received");
    messagerec.innerHTML = `<div align="right" > <p>${'<br>' + matchQuestion(message)}</p> </div>`; // Calling Function
    chatbox.appendChild(messagerec);
    chatbox.scrollTop = chatbox.scrollHeight;
    messageInput.value = "";
    len1 =0;
    len2 =0;
  }
}
var clearscreen = document.getElementById("cls");
clearscreen.addEventListener("click",()=>{
  chatbox.textContent="";
})
// function correct(word) {
//   var resp = "";
//   var largesimilarity = 0.0;
//   if (keywords.includes(word.toLowerCase()))
//     return word
//   else {
//     for (let dictword of keywords) {
//       const similarity = getletterSimilarity(word.toLowerCase(), dictword);
//       if (similarity >= largesimilarity) {
//         largesimilarity = similarity;
//         resp = dictword;
//       }
//     }
// }
//   // var match = stringSimilarity.findBestMatch(word,keywords);
//   // if (match['bestMatch']['rating']>= 0.7)
//   //   return match['bestMatch']['target'];
  
//   return resp;
// }

function correct(word){
  if(keywords.includes(word.toLowerCase()))
      return word
  var match = stringSimilarity.findBestMatch(word.toLowerCase(),keywords);
  var rate = match['bestMatch']['rating'];
  // console.log(rate)
  var target = match['bestMatch']['target'];
  if(rate>0.3)
      return target
  else return word
}
function getletterSimilarity(word1, dictword) {
  const letr1 = Array.from(word1.toLowerCase());
  const letr2 = Array.from(dictword.toLowerCase());
  const intersection = new Set(letr1.filter(letter => letr2.includes(letter)));
  const union = new Set([...letr1, ...letr2]);
  return intersection.size / union.size;
}

function getSimilarity(str1, str2) {
  const words1 = str1.toLowerCase().split(/\W+/);
  const words2 = str2.toLowerCase().split(/\W+/);
  const intersection = new Set(words1.filter(word => words2.includes(word)));
  const union = new Set([...words1, ...words2]);
  return intersection.size / union.size;
}

function getRandomResponse(responses) {
  return responses[Math.floor(Math.random() * responses.length)];
}
function getRandompatterns() {
  return patterns[Math.floor(Math.random() * patterns.length)];
}

function matchQuestion(question) {
  var resp = "";
  var largesimilarity = 0.0;
  for (let intent of data.intents) {
    //Loop through each pattern
    for (let pattern of intent.patterns) {
      // Calculate the similarity between the question and the Pattern
      const similarity = getSimilarity(question, pattern);
      // If similarity is above a certain threshold, return the Response
      if (similarity >= largesimilarity) {
        largesimilarity = similarity;
        resp = intent.responses;
      }
    }
  }
  // If no match is found, return a default response
  if (largesimilarity > 0.2) {
    console.log(largesimilarity);
    return getRandomResponse(resp);
  }
  return "Sorry, We are adding Data to the Server.";
}


!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.stringSimilarity=e():t.stringSimilarity=e()}(self,(function(){return t={138:t=>{function e(t,e){if((t=t.replace(/\s+/g,""))===(e=e.replace(/\s+/g,"")))return 1;if(t.length<2||e.length<2)return 0;let r=new Map;for(let e=0;e<t.length-1;e++){const n=t.substring(e,e+2),o=r.has(n)?r.get(n)+1:1;r.set(n,o)}let n=0;for(let t=0;t<e.length-1;t++){const o=e.substring(t,t+2),s=r.has(o)?r.get(o):0;s>0&&(r.set(o,s-1),n++)}return 2*n/(t.length+e.length-2)}t.exports={compareTwoStrings:e,findBestMatch:function(t,r){if(!function(t,e){return"string"==typeof t&&!!Array.isArray(e)&&!!e.length&&!e.find((function(t){return"string"!=typeof t}))}(t,r))throw new Error("Bad arguments: First argument should be a string, second should be an array of strings");const n=[];let o=0;for(let s=0;s<r.length;s++){const i=r[s],f=e(t,i);n.push({target:i,rating:f}),f>n[o].rating&&(o=s)}return{ratings:n,bestMatch:n[o],bestMatchIndex:o}}}}},e={},function r(n){if(e[n])return e[n].exports;var o=e[n]={exports:{}};return t[n](o,o.exports,r),o.exports}(138);var t,e}));
