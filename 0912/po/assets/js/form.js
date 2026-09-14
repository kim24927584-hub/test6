function init (){
    const form = document.getElementById('contactForm');
   
    if (!form) return;
    
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');

    
    if(nameInput){
      nameInput.addEventListener("blur", validateName );
      // nameInput.addEventListener("input", clearErrorOnInput );
    }
    function validateName(){
      const name = nameInput.value.trim();
      const errorElement = document.getElementById("nameError");

      if(name == ""){
        showError("nameError", "이름을 입력해주세요.");
        return false;
      }else if(name.length < 2){
        showError("nameError", "이름은 2자 이상 입력해주세요.");
        return false;
      }else{
        hideError("nameError");
        nameInput.classList.add("valid");
        nameInput.classList.remove("error");
        return true;
      }
    }
}
init();
   