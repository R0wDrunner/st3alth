document.addEventListener('keydown', function(event) {
    if (event.key === "Delete") {
      let messageElement = document.getElementById('message');
      if (!messageElement) {
        messageElement = document.createElement('div');
        messageElement.id = 'message';
        messageElement.style.position = 'fixed';
        messageElement.style.top = '50%';
        messageElement.style.left = '50%';
        messageElement.style.transform = 'translate(-50%, -50%)';
        messageElement.style.zIndex = '99999999999';
        messageElement.style.color = 'white';
        messageElement.style.fontSize = '20px';
        messageElement.style.fontFamily = 'Arial, sans-serif';
        messageElement.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        messageElement.style.padding = '10px';
        messageElement.style.borderRadius = '8px';
        messageElement.innerText = 'This is a message!';
        document.body.appendChild(messageElement);
      } else {
        messageElement.remove(); // remove the message when Delete is pressed again
      }
    }
  });
  