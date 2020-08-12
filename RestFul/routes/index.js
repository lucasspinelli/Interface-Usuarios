module.exports = (app)=>{

    
    app.get('/',(req, res)=>{

        
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html'); //COMANDO PARA SABER QUE O COMANDO ABAIXO É HTML
        res.end('<h1>Hello World!</h1>');

    });

}; // exportando o routes para outros arquivos