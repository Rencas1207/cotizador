import { MARCAS } from "../constants";
import useCotizador from "../hooks/useCotizador"

export default function Resultado() {
   const { result, datos } = useCotizador();
   const { marca, plan, year } = datos;

   if (result === 0) return;

   const [nombreMarca] = MARCAS.filter(m => m.id === Number(marca));
   console.log(nombreMarca)

   return (
      <div className="bg-gray-100 text-center mt-5 p-5 shadow">
         <h2 className="text-gray-600 font-black text-3xl">
            Resumen
         </h2>
         <p className="my-2">
            <span className="font-bold">Marca:</span> {nombreMarca.nombre}
         </p>
      </div>
   )
}
