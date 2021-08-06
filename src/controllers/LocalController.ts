import { getManager } from 'typeorm';

interface Request {
    id: number,
    cd_local: string,
    nm_local: string,
    id_predio: number
  }

  class LocalController{

    public async listAll(): Promise<Request[]>{

        const db = getManager();
        const query = `EXECUTE DBO.proc_seltb_local `;

        const local = await db.query(query);

        return local;
    }

    public async listID(id:number): Promise<Request[]>{

        const db = getManager();
        const query = `EXECUTE DBO.proc_seltb_local

        @id         =${id}

        `;

        const local = await db.query(query);

        return local;
    }

    public async listLocal(nomelocal:string): Promise<Request[]>{

        const db = getManager();
        const query = `EXECUTE DBO.proc_seltb_local

        @nm_local         ='${nomelocal}'

        `;

        const local = await db.query(query);

        return local;
    }

    public async InsertLocal(id_predio:number, cd_local:string, nm_local:string): Promise<Request[]>{

        const db = getManager();
        const query = `EXECUTE DBO.proc_instb_local

        @id_predio          =${id_predio},
        @nm_local           ='${nm_local}',
        @cd_local           ='${cd_local}'

        `;

        const local = await db.query(query);

        return local;
    }

    public async UpdateLocal({id,nm_local, cd_local,id_predio}:Request): Promise<Request[]>{

        const db = getManager();
        const query = `EXECUTE DBO.proc_updtb_local

        @id               =${id},
        @nm_local        ='${nm_local}',
        @cd_local        ='${cd_local}',
        @id_predio        ='${id_predio}'

        `;

        const local = await db.query(query);

        return local;
    }

    public async DeleteID(id:number): Promise<Request[]>{

        const db = getManager();
        const query = `EXECUTE DBO.proc_deltb_local

        @id         =${id}

        `;

        const local = await db.query(query);

        return local;
    }


  }


  export default LocalController;