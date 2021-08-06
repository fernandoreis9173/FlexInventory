import { getManager } from 'typeorm';

interface Request {
    id: number,
    id_fabricante: number,
    id_modelo: number,
    id_local: number
  }

  class EquipamentoController{

    public async listAll(): Promise<Request[]>{

        const db = getManager();
        const query = `EXECUTE DBO.proc_seltb_equipamento `;

        const equipamento = await db.query(query);

        return equipamento;
    }

    public async listID(id:number): Promise<Request[]>{

        const db = getManager();
        const query = `EXECUTE DBO.proc_seltb_equipamento

        @id         =${id}

        `;

        const equipamento = await db.query(query);

        return equipamento;
    }

    public async InsertEquipamento(id_fabricante:number, id_modelo:number, id_local:number): Promise<Request[]>{

        const db = getManager();
        const query = `EXECUTE DBO.proc_instb_equipamento

        @id_fabricante          =${id_fabricante},
        @id_modelo           ='${id_modelo}',
        @id_local           ='${id_local}'

        `;

        const equipamento = await db.query(query);

        return equipamento;
    }

  }

  export default EquipamentoController;