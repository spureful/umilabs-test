function validForm() {

    const form = document.getElementById('js-form');
    const inputName = document.getElementById('js-name');
    const inputMail = document.getElementById('js-mail');
    const inputPhone = document.getElementById('js-phone');
    const inputText = document.getElementById('js-ta');


    const regName = /^[А-ЯA-Z][а-яa-zА-ЯA-Z\-]{0,}\s[А-ЯA-Z][а-яa-zА-ЯA-Z\-]{1,}(\s[А-ЯA-Z][а-яa-zА-ЯA-Z\-]{1,})?$/;
    const regMail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    const regPhone = /^([+]?[0-9\s-\(\)]{4,25})*$/i;
    const regText = /^[а-яА-ЯёЁa-zA-Z0-9.?!-,^:"'() ]+$/;


    const nullMes = 'Пожалуйста, заполните это поле';
    const nameMes = 'Введите корректное Имя и фамилию';
    const mailMes = 'Введите корректный e-mail';
    const phoneMes = 'Введите корректный номер телефона';
    const textMes = 'Введите комментарий';


    form.addEventListener('submit', function (e) {
        e.preventDefault();

     
        validName();
        validMail();
        validPhone();
        validText();
        

     
    });

    
    
      function validName() {
            validTest(inputName, regName, nullMes, nameMes);
            
        }

        function validMail() {
            validTest(inputMail, regMail, nullMes, mailMes);
        }

        function validPhone() {
             validTest(inputPhone, regPhone, nullMes, phoneMes);
        }

        function validText() {
             validTest(inputText, regText, nullMes, textMes);
        }
    
   
    

    function validTest(input, reg, nullMes, mes) {

        let isvalid = false;

        const errorMes = document.createElement('span');
        errorMes.className = "error";



        form.addEventListener('submit', function (e) {
            e.preventDefault();
       
            input.parentNode.removeChild(errorMes);

        });

        input.addEventListener('focus', function () {

            input.parentNode.removeChild(errorMes);

        });


        if (!input.value) {

            isvalid = false;

            input.parentNode.appendChild(errorMes);
            errorMes.innerHTML = nullMes;



        } else
        if (reg.test(input.value) == false) {

            isvalid = false;
            input.parentNode.appendChild(errorMes);
            errorMes.innerHTML = mes;



        } else {
            isvalid = true;

        }

        return isvalid;
       
    }



}


validForm();
