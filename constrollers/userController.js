class UserController  {

    constructor (formId, tableId){

        this.formEl = document.getElementById(formId);
        this.tableEl = document.getElementById(tableId);

        this.onSubmit();

    }

    onSubmit(){

        this.formEl.addEventListener("submit", event => { // Arrow Function (melhor pra conflito de escopo)

         event.preventDefault(); //cancelar o comportamento padrão

        let values =  this.getValues();

        this.getPhoto().then(
            (content)=>{

                values.photo = content;

                this.addLine(values);

         }, 
            (e) => {
            console.error(e);
         }
        );
        

        });

    }

    getPhoto(callback){
        // MUDANDO PRA ARROW FUNCTION PARA NÃO MUDAR O ESCOPO DO formEl
        return new Promise((resolve, reject)=>{ //Promise é uma classe e precisa ser instanciada

            let fileReader = new FileReader(); //API nativa para ler arquivos

            let elements = [...this.formEl.elements].filter(item=>{

            if (item.name === 'photo'){
                return item;
            }

            });

            let file = (elements[0].files[0]);

            fileReader.onload =()=>{ //Ação a ser feita ao carregar um CALLBACK

                resolve(fileReader.result);

            };

            fileReader.onerror = (e)=>{

                reject(e);

            };

            fileReader.readAsDataURL(file);


        });

        
    }

    getValues(){

        let user = {};

        [...this.formEl.elements].forEach(function(field, index){ //... = Spread

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
                <td><img src="${dataUser.photo}" alt="User Image" class="img-circle img-sm"></td>
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