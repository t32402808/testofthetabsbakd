export class MessageSystem {
  updateMessage(messageObj, theMessage) {
    const messageElem = messageObj.message;
    messageElem.innerHTML = theMessage;

    clearTimeout(messageObj.messageTimer);
    
    if (!messageElem.classList.contains('active')) {
      messageElem.classList.add('active');
    }
    
    messageObj.messageTimer = setTimeout(() => {
      messageElem.classList.remove('active');
    }, 2000);
  }
}