import { getManager } from 'typeorm';

interface Request {
    id: number,
    cd_predio: string
    nm_predio: string
  }

  class PredioController{

    public async listAll(): Promise<Request[]>{

        const db = getManager();
        const query = `EXECUTE DBO.proc_seltb_predio `;

        const predio = await db.query(query);
        return predio;
    }

    public async listID(id:number): Promise<Request[]>{

        const db = getManager();
        const query = `EXECUTE DBO.proc_seltb_predio

        @id         =${id}

        `;

        const predio = await db.query(query);
        return predio;
    }

    public async listPredio(nomepredio:string): Promise<Request[]>{

        const db = getManager();
        const query = `EXECUTE DBO.proc_seltb_predio

        @nm_predio         ='${nomepredio}'

        `;

        const predio = await db.query(query);
        return predio;
    }

    public async InsertPredio(cd_predio:string, nm_predio:string): Promise<Request[]>{

        const db = getManager();
        const query = `EXECUTE DBO.proc_instb_predio

        @nm_predio       ='${nm_predio}',
        @cd_predio           ='${cd_predio}'

        `;

        const predio = await db.query(query);
        return predio;
    }

    public async UpdatePredio({id,nm_predio}:Request): Promise<Request[]>{

        const db = getManager();
        const query = `EXECUTE DBO.proc_updtb_predio

        @id               =${id},
        @nm_predio        ='${nm_predio}'

        `;

        const predio = await db.query(query);
        return predio;
    }

    public async DeleteID(id:number): Promise<Request[]>{

        const db = getManager();
        const query = `EXECUTE DBO.proc_deltb_predio

        @id         =${id}

        `;

        const predio = await db.query(query);
        return predio;
    }

  }
  

  export default PredioController;