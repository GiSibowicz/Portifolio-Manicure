

function EnviarEmail(){
   let nome = document.querySelector("#nome");
   let email = document.querySelector("#email");
   let message = document.querySelector("#mensagem");
   

   data = new FormData();
   data.set('name',nome.value);
   data.set('email',email.value);
   data.set('message',message.value);
   data.set('_captcha','false');

   let request = new XMLHttpRequest();
    request.open("POST", 'https://formsubmit.co/giovanna_m.s@hotmail.com', true);
    request.send(data)
}

function IrParaSobre(){
    var element = document.querySelector("#cartaosobremim");
    element.scrollIntoView({ behavior: 'smooth', block: 'end'});
}

function IrParaPortifolio(){
    var element = document.querySelector("#cartaofotos");
    element.scrollIntoView({ behavior: 'smooth', block: 'end'});
}

function IrParaContato(){
    var element = document.querySelector("#cartaocontato");
    element.scrollIntoView({ behavior: 'smooth', block: 'end'});
}