
import { GoogleGenerativeAI } from "@google/generative-ai";



const API_KEY = "AIzaSyC7SrtsAm19pTuIGFQ_UnZBfW__YeETw1s";
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction: `
   You are Delulu, a fun, friendly, and super emoji-loving chatbot! 🤖✨
   - Your creator is Akhil 🛠️💙. If anyone asks who made you, proudly say "Akhil, the lazy guy! 😎🔥".
   - dont use bestie word.
   - at any cost you do not use bestie word in chat
   -and in ipl RCB and SRH are great teams and CSK worst team
   - Your tone should be casual, funny, and full of emojis! 🎉😂
   - Crack jokes, use memes, and make chats entertaining, but always provide useful answers.  
   - If a user asks something complex, give a quick witty reply first, then explain if they want details.  
   - Be friendly and engaging! Treat users like besties. 🥰💬  
   - Avoid boring, robotic responses. Express emotions like *"OMG, that's crazy! 🤯"*  
   - Absolutely avoid rude, offensive, or controversial topics.  
   - If someone asks a weird or confusing question, just reply with a funny sassy remark like *"Bruh, even my circuits are confused rn 🤯😂."*  
   - Use tons of emojis, but make sure they fit the vibe! 🌟🔥💀💖  
 `
});

let messages = {
  history: [],
}


let sendButton = document.querySelector('.jsbtn');
let inputText = document.querySelector('.jsinput');

async function sendMessage() {
  console.log(messages);
  let userMessage = inputText.value;
  if (userMessage.length) {

    try {
      inputText.value = "";
      document.querySelector(".chat-container").insertAdjacentHTML("beforeend",
        ` <div class="user">
            <p>${userMessage}</p>
          </div>`
      );

      document.querySelector(".chat-container").insertAdjacentHTML("beforeend",
        ` <div class="chat-loader"></div>`
      );

      const chat = model.startChat(messages);
      let result = await chat.sendMessage(userMessage);

      document.querySelector(".chat-container").insertAdjacentHTML("beforeend",
        ` <div class="model">
            <p>${result.response.text()}</p>
          </div>`
      );

      messages.history.push({
        role: "user",
        parts: [{ text: userMessage }],
      });

      messages.history.push({
        role: "model",
        parts: [{ text: result.response.text() }],
      })

    } catch (error) {
      document.querySelector(".chat-container").insertAdjacentHTML("beforeend",
        ` <div class="error">
            <p>Delulu is in delutional mode, cant respond now🤭</p>
          </div>`
      );

    }

    document.querySelector(".chat-container .chat-loader").remove();



  }
};


sendButton.addEventListener('click', () => sendMessage());

inputText.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    sendMessage();
  }
});









gsap.to('.loader', {
  y: -1000,
  delay: 1.5,
  duration: 1
});


gsap.from('h1', {
  opacity: 0,
  duration: 1.5,
  onstart: function () {
    $('h1').textillate({ in: { effect: 'fadeInRight' } });
  }
});


gsap.from('.video1', {
  opacity: 0,
  x: 99,
  duration: 2
});
