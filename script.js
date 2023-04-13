// import data from './datascript.mjs';
// import keywords from './keywords.mjs';
var keywords = ['hello','hi','he','she','they','them','located', 'bitm', 'cse', 'the', 'computer', 'science', 'artificial', 'intelligence', 'and', 'college', 'ballari', 'institute', 'of', 'technology', 'management', 'principal', 'director', 'deputy', 'hod', 'faculties', 'faculty', 'experience', 'highest', 'package', 'campus', 'naveed', 'mahika', 'Students', 'student', 'good', 'fees', 'timings', 'bus', 'engineering', 'electrical', 'mechanical', 'electronics', 'data', 'who', 'what', 'when', 'what', 'where', 'which', 'did', 'didn\'t', 'does', 'do', 'don\'t', 'doesn\'t', 'had', 'how', 'much', 'payment', 'every', 'everyone', 'someone', 'somewhere', 'location', 'locality', 'place', 'new', 'existing', 'old', 'established'];
var data = {
  "intents": [
    {
      "patterns": ["bitm college located","Location of BITM College"],
      "responses": ["Jnana Gangotri Campus, Hospet Rd, near Allipura, Ballari, 583104",]
    },
    {
      "tag": "greeting",
      "patterns": [
        "hii", "hiii", "hiiii", "Hi", "Hey", "How are you", "Is anyone there?", "Hello", "Good day"
      ],
      "responses": [
        "Hey 😊", "Hello, thanks for visiting BITM Protrol 😊", "Hi there, what can I do for you? 😄", "Hi there, how can I help? 😄"
      ]
    },
    {
      "tag": "goodbye",
      "patterns": ["Bye", "See you later", "Goodbye"],
      "responses": [
        "See you later, thanks for visiting 🤗",
        "Have a nice day 🤗",
        "Bye! Come back again soon. 🤗"
      ]
    },
    {
      "tag": "thanks",
      "patterns": ["Thanks", "Thank you", "That's helpful", "Thank's a lot!"],
      "responses": ["Happy to help!", "Any time!", "My pleasure"]
    },
    {
      "tag": "payments",
      "patterns": [
        "payment option",
        "how can i pay",
        "online payment is accepted ?",
        "Is Cash Accepted"
      ],
      "responses": [
        "We accept VISA, Mastercard , UPI transaction too and Even we have any option for Payment Through Bank Beside our College"
      ]
    },
    {
      "tag": "funny",
      "patterns": [
        "Tell me a joke!",
        "Tell me something funny!",
        "Do you know a joke?"
      ],
      "responses": [
        "Why did the hipster burn his mouth? He drank the coffee before it was cool.",
        "What did the buffalo say when his son left for college? Bison."
      ]
    },
    {
      "tag": "BITM",
      "patterns": [
        "BITM",
        "Tell me about BITM"
      ],
      "responses": [
        "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGdDTIxXfQyX_wVsUZCB-Ck4pnSnHJ9oOsk3XcbztKlhYcANIbjkmogyMphWrGEfR5zFU&usqp=CAU' width='180' height='120'>Ballari Institute of Technology and Management , an Autonomous college established in 1997 BITM is Currently an Autonomous Institute providing Education for Various Technological and Management Courses"
      ]
    },
    {
      "patterns": ["Established BITM started college founded"],
      "responses": [
        "In 1997, by Smt. Basavarajeswari, after serving the nation for almost four decades she had a vision to give quality education to students of Bellary. "
      ]
    },
    {
      "tag": "Course",
      "patterns": [
        "Course",
        "Courses offered in BITM",
        "Courses offered",
        "Courses in BITM"
      ],
      "responses": [
        " There are Many Cousrse Offered in BITM like CSE,EEE,ECE,ME,AIML,AI,DS(Data Science) and MBA Course too Type any of the Course name to get Detailed Information"
      ]
    },
    {
      "tag": "CSE",
      "patterns": [
        "CSE",
        "Computer",
        "Computer SCience",
        "Computer SCience and Engineering"
      ],
      "responses": [
        " <img src='https://png.pngtree.com/png-clipart/20220824/original/pngtree-word-cloud-computer-science-png-image_8489345.png' width='90' height='100'>Computer Science and Engineering is 4 years Course , there is Huge Demand for CSE in BITM , Providing Huge Placement Offers Computer science focuses on the development and testing of software and software systems. It involves working with mathematical models, data analysis and security, algorithms, and computational theory. Computer scientists define the computational principles that are the basis of all software <br> <br> <a href= 'https://bitm.edu.in/computer-science/'>Click Here</a>  for More Details <br> <br> Type <u> 'Faculty of CSE' </u> to get names of all CSE Faculties"
      ]
    },
    {
      "tag": "EEE",
      "patterns": [
        "EEE",
        "Electrical",
        "Electrical and Electronics",
        "Electrical and Electronics Engineering"
      ],
      "responses": [
        "<img src='https://w7.pngwing.com/pngs/385/71/png-transparent-electricity-electrical-engineering-symbol-electrician-electrical-s-trademark-logo-electrical-wiring.png' width='120' height='100'>Electronics engineers analyze the requirements and costs of electrical systems. Electrical engineers design, develop, test, and supervise the manufacture of electrical equipment, such as electric motors, radar and navigation systems, communications systems, or power generation equipment <br> <br> <a href= 'https://bitm.edu.in/electrical-electronics/'>Click Here</a> For More Details <br> <br> Type <u> 'Faculty of EEE' </u> to get names of all EEE Faculties"
      ]
    },
    {
      "tag": "ECE",
      "patterns": [
        "ECE",
        "Electronics and Communication",
        "Electronics and Communication Engineering"
      ],
      "responses": [
        "<img src='https://image.pngaaa.com/799/2861799-middle.png' width='110' height='100'>Electronics and Communication is 4 Years and 8 Semester Course The Department of Electronics & Communication Engineering shall strive to create engineering technocrats for addressing the global challenges in relevant areas to cater the ever-changing needs of society at National and International levels. <br> <br> <a href= 'https://bitm.edu.in/electronics-communication/'> Click Here </a> For More Details <br> <br> Type <u> 'Faculty of ECE' </u> to get names of all ECE Faculties"
      ]
    },
    {
      "tag": "ME",
      "patterns": [
        "ME",
        "Mechanical",
        "Mechanical Engineering"
      ],
      "responses": [
        " <img src='https://e7.pngegg.com/pngimages/411/183/png-clipart-mechanical-engineering-logo-mechanical-engineering-logo-thermal-engineering-mechanics-industrail-workers-and-engineers-miscellaneous-text.png' width='90' height='100'>This Course provides an ability to identify, formulate, and solve complex engineering problems by applying principles of engineering, science, and mathematics , an ability to apply engineering design to produce solutions that meet specified needs with consideration of public health, safety, and welfare, as well as global, cultural, social, environmental, and economic factorsVisit <br> <br> <a href= 'https://bitm.edu.in/mechanical-engineering/'> Click Here </a> For More Details <br> <br> Type <u> 'Faculty of ME' </u> to get names of all ME Faculties"
      ]
    },
    {
      "tag": "civil",
      "patterns": [
        "CV",
        "CVE",
        "Civil Engineering"
      ],
      "responses": [
        "<img src='https://png.pngtree.com/element_our/20190601/ourmid/pngtree-cartoon-worker-looking-at-engineering-drawing-png-material-at-construction-site-image_1340594.jpg' width='80' height='100'>Civil Engineering is 4 Years and 8 sem Course <br> Educate new generations of civil engineers to meet the challenges, demands, and expectations of our global society, Cultivate, enrich and promote scholarship, responsibility and service among our graduates <br> <br>  <a href= 'https://bitm.edu.in/civil-engineering/'> Click Here </a> For More Details <br> <br> Type <u> 'Faculty of CVE' </u> to get names of all CVE Faculties"
      ]
    },
    {
      "tag": "AIML",
      "patterns": [
        "AIML",
        "Artificial Engineering",
        "Artificial Intelligence",
        "Artificial Intelligence and Engineering"
      ],
      "responses": [
        "<img src='https://www.smec.ac.in/assets/images/aiml/aiml.png' width='120' height='70'>The objective of general AI is to design a system capable of thinking for itself just like humans do. <br> Currently, general AI is still under research, and efforts are being made to develop machines that have enhanced cognitive capabilities. <br> AIML has Huge Demand all over World Providing big pool of Oppurtunities for all the Students AIML is 4 years and 8 Sem Duration Course offering Knowledge of Aritificial Intelligence and Mechine Learning"
      ]
    },
    {
      "tag": "DataScience",
      "patterns": [
        "DS",
        "DSE",
        "Data Science",
        "Data SCience and Engineering"
      ],
      "responses": [
        "<img src='https://piriyakumar.co.in/wp-content/uploads/2018/02/datascience.png' width='120' height='100'>Data Science is New Brance Offered by our College which is 4 years and 8 sem Duration Course which provides all the Knowledge of Data Scientist to process the Data and provide the Specified Results. <br> Data scientist is to explore, sort and analyze megadata from various sources in order to take advantage of them and reach conclusions to optimize business processes or for decision support."
      ]
    },
    {
      "tag": "HODs",
      "patterns": [
        "HODs",
        "Head of Departments"
      ],
      "responses": [
        " Dr. R N Kulkarni - HOD of CSE Dept. <br> Dr. K M Sadyojatha - HOD of ECE Dept. <br> Dr. Vidyavati - HOD of AIML "
      ]
    },
    {
      "tag": "Naveed",
      "patterns": [
        "Shaik Mohammed Naveed",
        "Mohammed Naveed",
        "Naveed"
      ],
      "responses": [
        "He Was 2024 Passed Out Batch Student"
      ]
    },
    {
      "tag": "Mahika",
      "patterns": [
        "Mahika",
        "Mahika Dhar",
        "Minchu"
      ],
      "responses": [
        "Also known Minchu Was 2024 Passed Out Batch Student, She was favourite Student of all the Staff."
      ]
    },
    {
      "tag": "Principal",
      "patterns": [
        "Principal",
        "Principal of BITM"
      ],
      "responses": [
        "Dr. Yadavalli Basavaraj  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ6WOApRm3bFZ5FfX7-pv3-TrZHdO4hnH6cf5U_87l0oEDl1yDwIP59NCgTxglVb-d_KY&usqp=CAU' width='70' height='80'>"
      ]
    },
    {
      "tag": "Director",
      "patterns": [
        "Director",
        "Director of BITM"
      ],
      "responses": [
        "Dr. Yashvanth Bhupal , MS,Ph. D,MIE,MISTE  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTKYujpw4jPqgEAZh17SRCbXsZJ_G3Z2zpmuGzn2LnjutTslTGjqSvsxYfQc40d_pl1pg&usqp=CAU  ' width='70' height='80'>"
      ]
    },
    {
      "tag": "DD",
      "patterns": [
        "DD",
        "Deputy Director",
        "Deputy Director of BITM"
      ],
      "responses": [
        "PROF. PRITHVIRAJ. Y.J, Trustee, Dy. Director, BITM, Bellary  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmYaPAFEpqS59XJGM0Xje-RleHECsnZn-B7TT9rOtzzf24NM7Hn004aFbsCO-hyAtRo1s&usqp=CAU' width='70' height='80'> "
      ]
    },
    {
      "tag": "Faculites",
      "patterns": [
        "Faculites",
        "Faculite",
        "Faculites of BITM"
      ],
      "responses": [
        "Which Dept. Faculties do you need? <br> Try Typing <br> Faculty of CSE <br> EEE Faculty <br> ECE Faculty <br> ME Faculty <br> AIML Faculty."
      ]
    },
    {
      "tag": "Faculty of CSE",
      "patterns": [
        "CSE Faculties",
        "Faculties of CSE",
        "Faculty of CSE",
        "Teachers of CSE",
        "Teacher of CSE"
      ],
      "responses": [
        "Dr. Rajkumar Nagnathrao Kulkarni (HOD) <br> Dr. Aradhana D (Ph. D) <br> Dr. RajaShree V Biradar (Ph. D) <br> Dr. Suresh Yeresime (Ph. D) <br> Dr. Anita S Patil <br> Muhibur Rahman T R <br> Venkateshwar Amingad <br> Phani Rama Prasad <br> Sreenivas Chinta Kalayalu <br> Swethashree A <br> Sheetal Janthakal <br> Sqathi D V <br> Prathiba Mishra <br> Lakshmi Sharma K M <br> Madhuri A <br> Kiran A MudaRaddi <br> Usman K <br> Sudhakar Avareddy <br> Shafiulla Mohammed <br> Dadapeer <br> Hayath T M <br> SriSaiLanath <br> Hari Krishana H <br> Virupaksha Gouda R <br> Sreenivas M <br> Vedavyas J <br> Chandrashekhar v <br> Narasimharaju Paka <br>"
      ]
    },
  ]
};
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
  console.log(rate)
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


!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.stringSimilarity=e():t.stringSimilarity=e()}(self,(function(){return t={138:t=>{function e(t,e){if((t=t.replace(/\s+/g,""))===(e=e.replace(/\s+/g,"")))return 1;if(t.length<2||e.length<2)return 0;let r=new Map;for(let e=0;e<t.length-1;e++){const n=t.substring(e,e+2),o=r.has(n)?r.get(n)+1:1;r.set(n,o)}let n=0;for(let t=0;t<e.length-1;t++){const o=e.substring(t,t+2),s=r.has(o)?r.get(o):0;s>0&&(r.set(o,s-1),n++)}return 2*n/(t.length+e.length-2)}t.exports={compareTwoStrings:e,findBestMatch:function(t,r){if(!function(t,e){return"string"==typeof t&&!!Array.isArray(e)&&!!e.length&&!e.find((function(t){return"string"!=typeof t}))}(t,r))throw new Error("Bad arguments: First argument should be a string, second should be an array of strings");const n=[];let o=0;for(let s=0;s<r.length;s++){const i=r[s],f=e(t,i);n.push({target:i,rating:f}),f>n[o].rating&&(o=s)}return{ratings:n,bestMatch:n[o],bestMatchIndex:o}}}}},e={},function r(n){if(e[n])return e[n].exports;var o=e[n]={exports:{}};return t[n](o,o.exports,r),o.exports}(138);var t,e}));
