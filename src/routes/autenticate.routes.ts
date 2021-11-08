import { Router } from 'express';
import AutenticateController from '../controllers/AutenticateController';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
const router = Router();

router.post("/", async(request, response) => {

  try{
    
    const {userText,passwordText } = request.body;
    const autenticate = new AutenticateController();
    const req = await autenticate.Login(userText,passwordText);
    response.status(200).json(req);
    
  }catch(error){
    response.status(400).send({error: 'Login ou Senha Invalido'})
    console.log(response)
  }

});

export default router;