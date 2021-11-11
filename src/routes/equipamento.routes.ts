import {Router} from 'express';
import EquipamentoController from '../controllers/EquipamentoController';
const router = Router();

router.get('/', async(request, response)=>{
    try{
        const equipamento = new EquipamentoController();
        const req = await equipamento.listAll()
        response.status(200).json(req);
      }catch(error){
        response.status(400).json({error: error.message})
      }
  });

  router.get('/byid/:id', async(request, response)=>{

    try{
  
      const id = Number(request.params.id);
  
      const equipamento = new EquipamentoController();
      const req = await equipamento.listID(id)
      response.status(200).json(req);
    }catch(error){
      response.status(400).json({error: error.message})
    }
    
  });

  router.post('/', async(request, response)=>{

    try{
  
      const {id_fabricante, id_modelo, cd_prefixo} = request.body;
  
      const equipamento = new EquipamentoController();
      const req = await equipamento.InsertEquipamento(id_fabricante, id_modelo, cd_prefixo);
      response.status(200).json(req);
    }catch(error){
      response.status(400).json({error: 'Equipamento não pode ser inserido'})
      console.log(error);
    }
    
  });

export default router;