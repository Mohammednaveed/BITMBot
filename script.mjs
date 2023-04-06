import data from './datascript.mjs';
import keywords from './keywords.mjs';

const chatbox = document.getElementById("chatbox");
const messageInput = document.getElementById("message");
const sendButton = document.getElementById("send");

sendButton.addEventListener("click", () => {
  var messarray = [];
  var message = messageInput.value.trim();
  console.log(message)
  const qwords = message.toLowerCase().split(/\W+/);
  for (let mes of qwords)
    messarray.push(correct(mes));
  message = messarray.join(' ');
  console.log(message)
  if (message) {
    const messageElement = document.createElement("div"); //Select sent message div and print in ChatBox
    messageElement.classList.add("message", "sent");
    messageElement.innerHTML = `<p>${message}</p>`;
    chatbox.appendChild(messageElement);

    const messagerec = document.createElement("div"); // Print the Result of Question in ChatBox
    messagerec.classList.add("message", "received");
    messagerec.innerHTML = `<p>${'BITM: <br>' + matchQuestion(message)}</p>`; // Calling Function
    chatbox.appendChild(messagerec);

    chatbox.scrollTop = chatbox.scrollHeight;
    messageInput.value = "";
  }
});

messageInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    sendButton.click();
  }
});
function correct(word) {
  var resp = "";
  var largesimilarity = 0.0;
  if (keywords.includes(word))
    return word
  else {
    for (let dictword of keywords) {
      const similarity = getletterSimilarity(word, dictword);
      if (similarity >= largesimilarity) {
        largesimilarity = similarity;
        resp = dictword;
      }
    }
  }
  if (largesimilarity >= 0.7)
    return resp;
  return word;
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
  if (largesimilarity > 0.1) {
    console.log(largesimilarity);
    return getRandomResponse(resp);
  }
  return "Sorry, We are adding Data to the Server.";
}
