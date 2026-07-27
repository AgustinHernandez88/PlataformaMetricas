interface Props{

    titulo:string

    valor:string

}

export default function MetricCard({

    titulo,

    valor

}:Props){

    return(

        <div className="bg-slate-800 rounded-xl p-6 shadow">

            <p className="text-slate-400">

                {titulo}

            </p>

            <h2 className="text-3xl text-white font-bold mt-3">

                {valor}

            </h2>

        </div>

    )

}