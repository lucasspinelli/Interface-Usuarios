let name = document.querySelector("exampleInputName");
let gender = document.querySelectorAll("#form-user-create [name=gender]:checked");// Pseudo Seletor, retorna somente os 'checked'
let birth = document.querySelector("exampleInputBirth");
let country = document.querySelector("exampleInputCountry");
let email = document.querySelector("exampleInputEmail");
let password = document.querySelector("exampleInputPassword");
let photo = document.querySelector("exampleInputFile");
let admin = document.querySelector("#exampleInputAdmin");


let fields = document.querySelectorAll("#form-user-create [name]"); //trazer todos os campos que tem name
var user = {};


console.log(user);

document.getElementById("form-user-create").addEventListener("submit", function(event){

    event.preventDefault(); //cancelar o comportamento padrão

    fields.forEach(function(field, index){ //encontrou o campo nome? Executa o código

        if (field.name == "gender"){ // == compara o valor === compara valor e tipo
    
            if(field.checked){  // Se não escrever nada, compara com True
                user[field.name] = field.value;
            } 
    
        } else {
    
            user[field.name] = field.value;
    
        }
    });

        console.log(user);
   
}); 