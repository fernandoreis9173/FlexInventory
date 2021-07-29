import {Router} from 'express';
import LocalController from '../controllers/LocalController';
const router = Router();

router.get('/', async(request, response)=>{
    try{
        const local = new LocalController();
        const req = await local.listAll()
        response.status(200).json(req);
      }catch(error){
        response.status(400).json({error: error.message})
      }
  });

  router.get('/byid/:id', async(request, response)=>{

    try{
  
      const id = Number(request.params.id);
  
      const local = new LocalController();
      const req = await local.listID(id)
      response.status(200).json(req);
    }catch(error){
      response.status(400).json({error: error.message})
    }
    
  });

  router.get('/byname/:local', async(request, response)=>{

    try{
  
      const local = request.params.local;
  
      const localController = new LocalController();
      const req = await localController.listLocal(local);
      response.status(200).json(req);
    }catch(error){
      response.status(400).json({error: error.message})
    }
    
  });

  router.post('/', async(request, response)=>{

    try{
  
      const {id_predio, cd_local, nm_local} = request.body;
  
      const local = new LocalController();
      const req = await local.InsertLocal(id_predio, cd_local, nm_local);
      response.status(200).json(req);
    }catch(error){
      response.status(400).json({error: error.message})
    }
    
  });

  router.put('/', async(request, response)=>{

    try{
  
      const {id, cd_local, nm_local, id_predio} = request.body;
  
      const local = new LocalController();
      const req = await local.UpdateLocal({id, cd_local, nm_local, id_predio});
      response.status(200).json(req);
    }catch(error){
      response.status(400).json({error: error.message})
    }
    
  });

  router.delete('/:id', async(request, response)=>{

    try{
  
      const id = Number(request.params.id);
  
      const local = new LocalController();
      const req = await local.DeleteID(id)
      response.status(200).json(req);
    }catch(error){
      response.status(400).json({error: error.message})
    }
  });

  
export default router;