import {Router} from 'express';
import PredioController from '../controllers/PredioController';
const router = Router();

router.get('/', async(request, response)=>{
    try{
        const predio = new PredioController();
        const req = await predio.listAll()
        response.status(200).json(req);
      }catch(error){
        response.status(400).json({error: error.message})
      }
  });

  router.get('/byid/:id', async(request, response)=>{

    try{
  
      const id = Number(request.params.id);
  
      const predio = new PredioController();
      const req = await predio.listID(id)
      response.status(200).json(req);
    }catch(error){
      response.status(400).json({error: error.message})
    }
    
  });

  router.get('/byname/:predio', async(request, response)=>{

    try{
  
      const predio = request.params.predio;
  
      const predioController = new PredioController();
      const req = await predioController.listPredio(predio);
      response.status(200).json(req);
    }catch(error){
      response.status(400).json({error: error.message})
    }
    
  });

  router.post('/', async(request, response)=>{

    try{
  
      const {cd_predio, nm_predio} = request.body;
  
      const predio = new PredioController();
      const req = await predio.InsertPredio(cd_predio, nm_predio);
      response.status(200).json(req);
    }catch(error){
      response.status(400).json({error: error.message})
    }
    
  });

  router.put('/', async(request, response)=>{

    try{
  
      const {id, cd_predio, nm_predio} = request.body;
  
      const predio = new PredioController();
      const req = await predio.UpdatePredio({id, cd_predio, nm_predio});
      response.status(200).json(req);
    }catch(error){
      response.status(400).json({error: error.message})
    }
    
  });

  router.delete('/:id', async(request, response)=>{

    try{
  
      const id = Number(request.params.id);
  
      const predio = new PredioController();
      const req = await predio.DeleteID(id)
      response.status(200).json(req);
    }catch(error){
      response.status(400).json({error: error.message})
    }
  });

  export default router;