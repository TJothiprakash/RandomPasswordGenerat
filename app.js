

const btne1 = document.querySelector('.generate');
const  inputEl = document.querySelector('.input');
const copyPass = document.querySelector('.img');
const alertContainerEl = document.querySelector(".alert-container");



btne1.addEventListener('click', ()=>{
    createPassword()
});

copyPass.addEventListener('click', () => {
    copyPassword();
    if(inputEl.value){
    alertContainerEl.classList.add('active');
    setTimeout(()=>{
        alertContainerEl.classList.remove('active');
    },2000)
    }
});


function createPassword(){
      const chars = "0123456789abcdefghijklmopqrstuvwxyz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ" ;
      const passwordLength = 16;
      let password = "";
      for(i=0 ; i < passwordLength ;i++ ){
        const randomNum = Math.floor (Math.random () * chars.length );
        password += chars.substring(randomNum,randomNum +1);
      }
      inputEl.value = password;
     alertContainerEl.innerText = password + " copied !";

}

function copyPassword(){
 inputEl.select();
 inputEl.setSelectionRange(0,9999) ;
 navigator.clipboard.writeText(inputEl.value);

}






