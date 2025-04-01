
import { GoogleGenerativeAI } from "@google/generative-ai";



const API_KEY = "AIzaSyC7SrtsAm19pTuIGFQ_UnZBfW__YeETw1s";
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

let messages = {
  history: [],
}


let sendButton = document.querySelector('.jsbtn');
let inputText = document.querySelector('.jsinput');

async function sendMessage() {
  let userMessage = inputText.value;
  if (userMessage.length) {
    inputText.value = "";
    document.querySelector(".chat-container").insertAdjacentHTML("beforeend",
      ` <div class="user">
          <p>${userMessage}</p>
        </div>`
    );

    const chat = model.startChat(messages);
    let result = await chat.sendMessage(userMessage);
    console.log(result.response.text());
  }
};


sendButton.addEventListener('click', () => sendMessage());

inputText.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    sendMessage();
  }
})









gsap.to('.loader', {
  y: -1000,
  delay: 3.5,
  duration: 1
});


gsap.from('h1', {
  opacity: 0,
  duration: 3,
  onstart: function () {
    $('h1').textillate({ in: { effect: 'fadeInRight' } });
  }
});


gsap.from('.video1', {
  opacity: 0,
  x: 99,
  duration: 2
});
