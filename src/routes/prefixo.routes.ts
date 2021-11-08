import {Router} from 'express';
import PrefixoController from '../controllers/PrefixoController';
const router = Router();

router.get('/', async(request, response)=>{
    try{
        const prefixo = new PrefixoController();
        const req = await prefixo.listAll()
        response.status(200).json(req);
      }catch(error){
        response.status(400).json({error: error.message})
      }
  });

  router.get('/byid/:id', async(request, response)=>{

    try{
  
      const id = Number(request.params.id);
  
      const prefixo = new PrefixoController();
      const req = await prefixo.listID(id)
      response.status(200).json(req);
    }catch(error){
      response.status(400).json({error: error.message})
    }
    
  });

  router.post('/', async(request, response)=>{
 
    try{
  
      const {cd_prefixo, qtd_inicial, qtd_final} = request.body;
  
      const prefixo = new PrefixoController();
      const req = await prefixo.InsertPrefixo(cd_prefixo, qtd_inicial, qtd_final);
      response.status(200).json(req);
    }catch(error){
      response.status(400).json({error: error.message})
    }
    
  });

export default router;