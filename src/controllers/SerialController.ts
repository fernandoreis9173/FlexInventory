import { getManager } from 'typeorm';

interface Request {
    id: number,
    id_equipamento: number
  }

  class SerialController{

    public async listAll(): Promise<Request[]>{

        const db = getManager();
        const query = `EXECUTE DBO.proc_seltb_serial `;

        const serial = await db.query(query);
        return serial;
    }

    public async listID(id:number): Promise<Request[]>{

        const db = getManager();
        const query = `EXECUTE DBO.proc_seltb_serial

        @id         =${id}

        `;

        const serial = await db.query(query);
        return serial;
    }

    public async InsertSerial(id_equipamento:number): Promise<Request[]>{

        const db = getManager();
        const query = `EXECUTE DBO.proc_instb_serial

        @id_equipamento          =${id_equipamento}

        `;

        const serial = await db.query(query);
        return serial;
    }


  }
  

  export default SerialController;