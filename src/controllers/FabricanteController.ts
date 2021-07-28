import { getManager } from 'typeorm';

interface Request {
    id: number,
    nm_fabricante: string
  }

class FabricanteController{
 
    public async listAll(): Promise<Request[]>{

        const db = getManager();
        const query = `EXECUTE DBO.proc_seltb_fabricante

        `;

        const fabricante = await db.query(query);

        return fabricante;
    }

    public async listID(id:number): Promise<Request[]>{

        const db = getManager();
        const query = `EXECUTE DBO.proc_seltb_fabricante

        @id         =${id}

        `;

        const fabricante = await db.query(query);

        return fabricante;
    }

    public async listFabricante(nomefabricante:string): Promise<Request[]>{

        const db = getManager();
        const query = `EXECUTE DBO.proc_seltb_fabricante

        @nm_fabricante         =${nomefabricante}

        `;

        const fabricante = await db.query(query);

        return fabricante;
    }

    public async InsertFabricante(nm_fabricante:string): Promise<Request[]>{

        const db = getManager();
        const query = `EXECUTE DBO.proc_instb_fabricante

        @nm_fabricante       =${nm_fabricante}

        `;

        const fabricante = await db.query(query);

        return fabricante;
    }

    public async UpdateFabricante({id,nm_fabricante}:Request): Promise<Request[]>{

        const db = getManager();
        const query = `EXECUTE DBO.proc_updtb_fabricante

        @id               =${id},
        @nm_fabricante       =${nm_fabricante}

        `;

        const fabricante = await db.query(query);

        return fabricante;
    }
    
    public async DeleteID(id:number): Promise<Request[]>{

        const db = getManager();
        const query = `EXECUTE DBO.proc_deltb_fabricante

        @id         =${id}

        `;

        const fabricante = await db.query(query);

        return fabricante;
    }

}

export default FabricanteController;