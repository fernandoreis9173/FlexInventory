import {Router} from 'express';
import ModeloController from '../controllers/ModeloController';
const router = Router();

router.get('/', async(request, response)=>{
    try{
        const modelo = new ModeloController();
        const req = await modelo.listAll()
        response.status(200).json(req);
      }catch(error){
        response.status(400).json({error: error.message})
      }
  });

  router.get('/byid/:id', async(request, response)=>{

    try{
  
      const id = Number(request.params.id);
  
      const modelo = new ModeloController();
      const req = await modelo.listID(id)
      response.status(200).json(req);
    }catch(error){
      response.status(400).json({error: error.message})
    }
    
  });

  router.get('/byname/:modelo', async(request, response)=>{

    try{
  
      const modelo = request.params.modelo;
  
      const modeloController = new ModeloController();
      const req = await modeloController.listModelo(modelo);
      response.status(200).json(req);
    }catch(error){
      response.status(400).json({error: error.message})
    }
    
  });

  router.post('/', async(request, response)=>{

    try{
  
      const {id_fabricante, nm_modelo} = request.body;
  
      const modelo = new ModeloController();
      const req = await modelo.InsertModelo(id_fabricante,  nm_modelo);
      response.status(200).json(req);
    }catch(error){
      response.status(400).json({error: error.message})
    }
    
  });

  router.put('/', async(request, response)=>{

    try{
  
      const {id, nm_modelo} = request.body;
  
      const modelo = new ModeloController();
      const req = await modelo.UpdateLocal({id, nm_modelo});
      response.status(200).json(req);
    }catch(error){
      response.status(400).json({error: error.message})
    }
    
  });

  router.delete('/:id', async(request, response)=>{

    try{
  
      const id = Number(request.params.id);
  
      const modelo = new ModeloController();
      const req = await modelo.DeleteID(id)
      response.status(200).json(req);
    }catch(error){
      response.status(400).json({error: error.message})
    }
  });


export default router;