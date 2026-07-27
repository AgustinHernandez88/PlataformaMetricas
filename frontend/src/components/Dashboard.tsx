import Navbar from "../components/Navbar";
import MetricCard from "../components/MetricCard";

export default function Dashboard(){

    return(

        <div className="min-h-screen bg-slate-900">

            <Navbar/>

            <div className="p-8">

                <h1 className="text-white text-3xl font-bold mb-8">

                    Dashboard

                </h1>

                <div className="grid grid-cols-4 gap-6">

                    <MetricCard

                        titulo="Consumo"

                        valor="0 kWh"

                    />

                    <MetricCard

                        titulo="Potencia"

                        valor="0 kW"

                    />

                    <MetricCard

                        titulo="Voltaje"

                        valor="0 V"

                    />

                    <MetricCard

                        titulo="Corriente"

                        valor="0 A"

                    />

                </div>

            </div>

        </div>

    )

}