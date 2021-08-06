import { getManager } from 'typeorm';

interface Request {
    id: number,
    nm_modelo: string,
    id_fabricante: number
  }

  class ModeloController{

    public async listAll(): Promise<Request[]>{

        const db = getManager();
        const query = `EXECUTE DBO.proc_seltb_modelo `;

        const modelo = await db.query(query);

        return modelo;
    }

    public async listID(id:number): Promise<Request[]>{

        const db = getManager();
        const query = `EXECUTE DBO.proc_seltb_modelo

        @id         =${id}

        `;

        const local = await db.query(query);

        return local;
    }

    public async listModelo(nomemodelo:string): Promise<Request[]>{

        const db = getManager();
        const query = `EXECUTE DBO.proc_seltb_modelo

        @nm_modelo         ='${nomemodelo}'

        `;

        const local = await db.query(query);

        return local;
    }

    public async InsertModelo(id_fabricante:number, nm_modelo:string): Promise<Request[]>{

        const db = getManager();
        const query = `EXECUTE DBO.proc_instb_modelo

        @id_fabricante          =${id_fabricante},
        @nm_modelo           ='${nm_modelo}'

        `;

        const local = await db.query(query);

        return local;
    }

    public async UpdateLocal({id, nm_modelo, id_fabricante}:Request): Promise<Request[]>{

        const db = getManager();
        const query = `EXECUTE DBO.proc_updtb_modelo

        @id               =${id},
        @nm_modelo        ='${nm_modelo}',
        @id_fabricante        ='${id_fabricante}'

        `;

        const modelo = await db.query(query);

        return modelo;
    }

    public async DeleteID(id:number): Promise<Request[]>{

        const db = getManager();
        const query = `EXECUTE DBO.proc_deltb_modelo

        @id         =${id}

        `;

        const modelo = await db.query(query);

        return modelo;
    }

}


export default ModeloController;