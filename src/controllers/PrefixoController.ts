import { getManager } from 'typeorm';

interface Request {
    id: number,
    cd_prefixo: string,
    qtd_inicial: number,
    qtd_final: number
  }

  class PrefixoController{

    public async listAll(): Promise<Request[]>{

        const db = getManager();
        const query = `EXECUTE DBO.proc_seltb_prefixo `;

        const prefixo = await db.query(query);
        return prefixo;
    }

    public async listID(id:number): Promise<Request[]>{

        const db = getManager();
        const query = `EXECUTE DBO.proc_seltb_prefixo

        @id         =${id}

        `;

        const prefixo = await db.query(query);
        return prefixo;
    }

    public async InsertPrefixo(cd_prefixo: string, qtd_inicial: number, qtd_final:number): Promise<Request[]>{

        const db = getManager();
        const query = `EXECUTE DBO.proc_instb_prefixo

        @cd_prefixo          ='${cd_prefixo}',
        @qtd_inicial          =${qtd_inicial}, 
        @qtd_final          =${qtd_final}

        `;

        const prefixo = await db.query(query);
        return prefixo;
    }

  }

  export default PrefixoController;