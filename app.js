function cipher(){
  var message = prompt("O que deseja criptografar?");
  var displacement = parseInt(prompt("Qual o fator de deslocamento?"));
  var toASCII = 0;
  var letter = 0;
  var cipherMessage = [];
  
  if (message.search(/[^a-zA-Z\s]/) === -1){
    for (var i = 0; i < message.length; i++){
      toASCII = message[i].charCodeAt();
      if(toASCII >= 65 && toASCII <= 90){
        letter = (toASCII - 65 + displacement) % 26 + 65;
        cipherMessage.push(String.fromCharCode(letter));
      } else if(toASCII >= 97 && toASCII <= 122){
        letter = (toASCII - 97 + displacement) % 26 + 97;
        cipherMessage.push(String.fromCharCode(letter));
      } else if (toASCII === 32){
        letter = 35;
        cipherMessage.push(String.fromCharCode(letter));
      }
    }
    var result = alert("A sua mensagem criptografada com um deslocamento de " + displacement + " é:\n" + cipherMessage.join("") + "\n\n\nMensagem original:\n" + message);
    return result;
  } else {
    return alert(undefined);
  }
}

function decipher(){
  var message = prompt("O que deseja descriptografar?");
  var displacement = parseInt(prompt("Qual o fator de deslocamento?"));
  var toASCII = 0;
  var letter = 0;
  var decipherMessage = [];  
 
  if (message.search(/[^a-zA-Z\s]/) === -1){
    for (var i = 0; i < message.length; i++){
      toASCII = message[i].charCodeAt();
      if(toASCII >= 65 && toASCII <= 90){
        letter = (toASCII - 90 - displacement) % 26 + 90;
        decipherMessage.push(String.fromCharCode(letter));
      } else if(toASCII >= 97 && toASCII <= 122){
        letter = (toASCII - 122 - displacement) % 26 + 122;
        decipherMessage.push(String.fromCharCode(letter));
      } else if (toASCII === 35){
        letter = 32;
        decipherMessage.push(String.fromCharCode(letter));
      }
    }
    var result = alert("A sua mensagem descriptografada com um deslocamento de " + displacement + " é:\n" + decipherMessage.join("") + "\n\n\nMensagem original:\n" + message);
    return result;
  } else {
    return undefined;
  }
}

var option = parseInt(prompt("❝CIFRA DE CÉSAR❞\nQual a opção desejada?\n❶ Criptografar\n❷ Descriptografar\n❾ Sair"));

if(option === 1){
  console.log(cipher());
} else if (option === 2){
  console.log(decipher());
} else if (option === 9){
  exit;
} else {
  alert("Opção inválida!");
};


