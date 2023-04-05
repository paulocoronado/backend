import { PrismaClient } from '@prisma/client'


class AdminEspecie{

    constructor(){
        this.prisma = new PrismaClient()
    }

    async crearEspecie(req, res){

        const datos=req.body;

        const especie= await this.prisma.especie.create(
            {
                data:datos
            }
        )

    }

    listarEspecies(req, res){

    }
    
}

module.exports=AdminEspecie;