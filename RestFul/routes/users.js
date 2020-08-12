let NeDB = require ('nedb');
let db = new NeDB({

    filename: 'users.db', 
    autoload:true

}); //Cria o banco de dados NEDB e se não existir, cria automatico

module.exports = (app)=>{

    let route = app.route('/users');

    route.get((req, res)=>{

//db.find = listar os dados do nedb
        db.find({}).sort({name:1}).exec((err, users)=>{

           if(err){
               app.utils.error.send(err, req, res);
           } else {

            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json({
        
                users /*se colocar uma chave ( no caso, users ) que tenha o mesmo nome que uma variavel (users), não 
                precisa colocar users:users, somente users (ECMA 6)*/
            });

           }

        }); // sort(parameter:1 ou -1) 1 ordem crescendo -1 decrescente

       
    
    });
    
    route.post((req, res)=>{

        if (!app.utils.validator.user(app, req, res)) return false;
        
        db.insert(req.body, (err, user)=>{

            if (err){
                app.utils.error.send(err, req, res);
            } else {

                res.status(200).json(user);

            }

        });
    
    });
    
    let routeId = app.route('/users/:id'); // Se colocar um ID na rota, tras somente o usuario do id

    routeId.get((req,res)=>{

      db.findOne({_id:req.params.id}).exec((err,user)=>{

        if (err){
            app.utils.error.send(err, req, res);
        } else {

            res.status(200).json(user);

        }

      });  

    });

    routeId.put((req,res)=>{

        if (!app.utils.validator.user(app, req, res)) return false;

        db.update({_id:req.params.id}, req.body, err=>{
  
          if (err){
              app.utils.error.send(err, req, res);
          } else {
  
              res.status(200).json(Object.assign(req.params, req.body));
  
          }
  
        });  
  
      });

      routeId.delete((req, res)=>{

        db.remove({_id:req.params.id}, {}, err=>{

            if (err){
                app.utils.error.send(err, req, res);
            } else {
    
                res.status(200).json(req.params);
    
            }
    

        });

      });

};  // exportando o routes para outros arquivos