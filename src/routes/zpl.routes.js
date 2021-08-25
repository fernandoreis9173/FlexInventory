import { Router} from 'express';
const router = Router();
const net = require('net'); 

router.post('/', (request, response) =>{
  try{

    const { zpl, host, port } = request.body;

    console.log(zpl,host,port);
    
    let client = net.connect(port, host, ()=>{ 
      client.write(zpl);
      client.end(()=>{
        response.status(200).json({msg:'OK'});
      });
    });
    
    client.on('error', ()=>{
      client.end(()=>{
        response.status(200).json({msg:'NOK'});
      });
    });
  
  }catch{
    response.status(200).json({msg:'NOK'});
  }
})

router.get('/:host/:port',(request, response)=>{

  console.log('aqui');

  try{
    const host = request.params.host;
    const port = request.params.port;

    let client = net.connect(port, host, ()=>{
      client.end(()=>{
        return response.status(200).json({msg:'OK'});
      });
    });  
  
    client.on('error', ()=>{
      client.end(()=>{
        response.status(200).json({msg:'NOK'});
      });
    });
  
  }catch{
    response.status(200).json({msg:'NOK'});
  }
});

export default router;