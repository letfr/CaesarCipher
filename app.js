function cipher() {
  var message = prompt('O que deseja criptografar?');
  var displacement = parseInt(prompt('Qual o fator de deslocamento?'));
  var toASCII = 0;
  var letter = 0;
  var cipherMessage = [];
  // VALIDAÇÃO DO INPUT
  if (message !== "" && !isNaN(displacement) && message.search(/[^a-zA-Z\s]/) === -1) {
    // PERCORRER TODOS OS CARACTERES DE message
    for (var i = 0; i < message.length; i++) {
      // CONVERTER CARACTERES CONFORME TABELA ASCII
      toASCII = message[i].charCodeAt();
      if (toASCII >= 65 && toASCII <= 90) {
        // LETRAS MAIÚSCULAS
        letter = (toASCII - 65 + displacement) % 26 + 65;
        cipherMessage.push(String.fromCharCode(letter));
      } else if (toASCII >= 97 && toASCII <= 122) {
        // LETRAS MINÚSCULAS
        letter = (toASCII - 97 + displacement) % 26 + 97;
        cipherMessage.push(String.fromCharCode(letter));
      } else if (toASCII === 32) {
        // ESPAÇO
        letter = 35;
        cipherMessage.push(String.fromCharCode(letter));
      }
    }
    // EXIBIÇÃO DO RESULTADO
    var result = alert('A sua mensagem criptografada com um deslocamento de ' + displacement + ' é:\n' + cipherMessage.join("") + '\n\n\nMensagem original:\n' + message);
    return result;
  } else if (message === "") {
    alert('Campo da string vazia!');
  } else if (isNaN(displacement)) {
    alert('Campo de fator de deslocamento vazio!');
  } else {
    alert('Digite apenas letras!');
  }
}

function decipher() {
  var message = prompt('O que deseja descriptografar?');
  var displacement = parseInt(prompt('Qual o fator de deslocamento?'));
  var toASCII = 0;
  var letter = 0;
  var decipherMessage = [];  
  // VALIDAÇÃO DO INPUT
  if (message !== "" && !isNaN(displacement) && message.search(/[^a-zA-Z\s]/) === -1) {
    // PERCORRER TODOS OS CARACTERES DE message
    for (var i = 0; i < message.length; i++) {
      // CONVERTER CARACTERES CONFORME TABELA ASCII
      toASCII = message[i].charCodeAt();
      if (toASCII >= 65 && toASCII <= 90) {
        // LETRAS MAIÚSCULAS
        letter = (toASCII - 90 - displacement) % 26 + 90;
        decipherMessage.push(String.fromCharCode(letter));
      } else if (toASCII >= 97 && toASCII <= 122) {
        // LETRAS MINÚSCULAS
        letter = (toASCII - 122 - displacement) % 26 + 122;
        decipherMessage.push(String.fromCharCode(letter));
      } else if (toASCII === 35) {
        // ESPAÇO
        letter = 32;
        decipherMessage.push(String.fromCharCode(letter));
      }
    }
    // EXIBIÇÃO DO RESULTADO
    var result = alert('A sua mensagem descriptografada com um deslocamento de ' + displacement + ' é:\n' + decipherMessage.join("") + '\n\n\nMensagem original:\n' + message);
    return result;
  } else if (message === "") {
    alert('Campo da string vazia!');
  } else if (isNaN(displacement)) {
    alert('Campo de fator de deslocamento vazio!');
  } else {
    alert('Digite apenas letras!');
  }
}

//MENU INICIAL COM OPÇÕES
do{
  var option = parseInt(prompt('❝CIFRA DE CÉSAR❞\n\nQual a opção desejada?\n❶ Criptografar\n❷ Descriptografar\n❾ Sair'));
  if (option === 1) {
    console.log(cipher());
  } else if (option === 2) {
    console.log(decipher());
  } else if (option !== 1 && option !== 2 && option !== 9) {
    alert('Opção inválida!');
  }
} while (option !== 9);