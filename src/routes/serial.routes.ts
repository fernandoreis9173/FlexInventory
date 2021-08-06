import {Router} from 'express';
import SerialController from '../controllers/SerialController';
const router = Router();

router.get('/', async(request, response)=>{
    try{
        const serial = new SerialController();
        const req = await serial.listAll()
        response.status(200).json(req);
      }catch(error){
        response.status(400).json({error: error.message})
      }
  });

  router.get('/byid/:id', async(request, response)=>{

    try{
  
      const id = Number(request.params.id);
  
      const serial = new SerialController();
      const req = await serial.listID(id)
      response.status(200).json(req);
    }catch(error){
      response.status(400).json({error: error.message})
    }
    
  });

  router.post('/', async(request, response)=>{

    try{
  
      const {id_equipamento} = request.body;
  
      const serial = new SerialController();
      const req = await serial.InsertSerial(id_equipamento);
      response.status(200).json(req);
    }catch(error){
      response.status(400).json({error: error.message})
    }
    
  });

export default router;