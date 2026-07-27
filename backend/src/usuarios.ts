export interface Usuario {

    id:number

    usuario:string

    password:string

    cliente:string

    nombre:string

}

export const usuarios:Usuario[]=[

    {

        id:1,

        usuario:"colocolo",

        password:"123456",

        cliente:"colo-colo",

        nombre:"Colo Colo"

    },

    {

        id:2,

        usuario:"codelco",

        password:"123456",

        cliente:"codelco",

        nombre:"Codelco"

    }

]