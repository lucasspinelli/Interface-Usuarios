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

function addLine(dataUser){

    console.log("add Line", dataUser);

    let tr = document.createElement("tr");
    tr.innerHTML =/* `` == Template String*/ ` 
        <tr>
            <td><img src="dist/img/user1-128x128.jpg" alt="User Image" class="img-circle img-sm"></td>
            <td>${dataUser.name}</td>
            <td>${dataUser.email}</td>
            <td>${dataUser.admin}</td>
            <td>${dataUser.birth}</td>
            <td>
                <button type="button" class="btn btn-primary btn-xs btn-flat">Editar</button>
                <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
            </td>
        </tr>
     `;
     document.getElementById("table-users").appendChild(tr);
}


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

        addLine(user);
   
}); 

