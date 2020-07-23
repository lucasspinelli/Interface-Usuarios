class UserController  {

    constructor (formId, tableId){

        this.formEl = document.getElementById(formId);
        this.tableEl = document.getElementById(tableId);

        this.onSubmit();

    }

    onSubmit(){

        this.formEl.addEventListener("submit", event => { // Arrow Function (melhor pra conflito de escopo)

         event.preventDefault(); //cancelar o comportamento padrão

        this.addLine(this.getValues());

        });

    }

    getValues(){

        let user = {};

        this.formEl.elements.forEach(function(field, index){ //encontrou o campo nome? Executa o código

            if (field.name == "gender"){ // == compara o valor === compara valor e tipo
        
                if(field.checked){  // Se não escrever nada, compara com True
                    user[field.name] = field.value;
                } 
        
            } else {
        
                user[field.name] = field.value;
        
            }
        });
    
    
            return new User(
                user.name,
                user.gender,
                user.birth,
                user.country,
                user.email,
                user.password,
                user.photo,
                user.admin
            );

    }

    addLine(dataUser){
    
        this.tableEl.innerHTML =/* `` == Template String*/ ` 
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
       
    }

}