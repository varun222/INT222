const { Socket } = require("socket.io");
const socket = io()
let name;
let textarea =document.querySelector('#textarea')
let messageArea =document.querySelector('.message__area')
do{
   name=prompt('Please enter your name')
}while(!name)

textarea.addEventListener('keyup',(e) =>{
   if(e.key === 'enter'){
      sendMessage(e.target.value)
   }
})

function sendMessage(message) {
   let msg ={
      user:name,
      message: message
   }
   //append
   appendMessage(msg,'outgoing')

   //send to server
   socket.emit('message',msg)

}

function appendMessage(msg,type){
   let mainDiv =document.createElement('div')
   let className =type
   mainDiv.classList.add(classNmae,'message')
    
   let markup =`
   <h3>${msg.user}</h3>
   <p>${msg.message}</p>
   `
    mainDiv.innerHTML = markup
    messageArea.appendChild(mainDiv)

}