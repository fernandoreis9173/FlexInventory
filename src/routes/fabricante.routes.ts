import {Router} from 'express';
import FabricanteController from '../controllers/FabricanteController';
const router = Router();


router.get('/', async(request, response)=>{

  try{
    const fabricante = new FabricanteController();
    const req = await fabricante.listAll()
    response.status(200).json(req);
  }catch(error){
    response.status(400).json({error: error.message})
  }
  
});

router.get('/byid/:id', async(request, response)=>{

  try{

    const id = Number(request.params.id);

    const fabricante = new FabricanteController();
    const req = await fabricante.listID(id)
    response.status(200).json(req);
  }catch(error){
    response.status(400).json({error: error.message})
  }
  
});

router.get('/byname/:fabricante', async(request, response)=>{

  try{

    const fabricante = request.params.fabricante;

    const fabricanteController = new FabricanteController();
    const req = await fabricanteController.listFabricante(fabricante);
    response.status(200).json(req);
  }catch(error){
    response.status(400).json({error: error.message})
  }
  
});

router.post('/', async(request, response)=>{

  try{

    const {nm_fabricante} = request.body;

    const fabricante = new FabricanteController();
    const req = await fabricante.InsertFabricante(nm_fabricante);
    response.status(200).json(req);
  }catch(error){
    response.status(400).json({error: error.message})
  }
  
});


router.put('/', async(request, response)=>{

  try{

    const {id, nm_fabricante} = request.body;

    const fabricante = new FabricanteController();
    const req = await fabricante.UpdateFabricante({id,nm_fabricante});
    response.status(200).json(req);
  }catch(error){
    response.status(400).json({error: error.message})
  }
  
});

router.delete('/:id', async(request, response)=>{

  try{

    const id = Number(request.params.id);

    const fabricante = new FabricanteController();
    const req = await fabricante.DeleteID(id)
    response.status(200).json(req);
  }catch(error){
    response.status(400).json({error: error.message})
  }
  
});

export default router;