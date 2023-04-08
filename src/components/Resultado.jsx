import { useCallback, useMemo, useRef } from "react";
import { MARCAS, PLANS } from "../constants";
import useCotizador from "../hooks/useCotizador"

export default function Resultado() {
   const { result, datos } = useCotizador();
   const { marca, plan, year } = datos;
   const yearRef = useRef(year);

   if (result === 0) return;

   const [nombreMarca] = useMemo(() => MARCAS.filter(m => m.id === Number(marca)), [result]);
   const [nombrePlan] = useMemo(() => PLANS.filter(p => p.id === Number(plan)), [result]);


   return (
      <div className="bg-gray-100 text-center mt-5 p-5 shadow">
         <h2 className="text-gray-600 font-black text-3xl">
            Resumen
         </h2>
         <p className="my-2">
            <span className="font-bold">Marca:</span> {nombreMarca.nombre}
         </p>

         <p className="my-2">
            <span className="font-bold">Plan:</span> {nombrePlan.nombre}
         </p>

         <p className="my-2">
            <span className="font-bold">Año del auto:</span> {yearRef.current}
         </p>

         <p className="my-2 text-2xl">
            <span className="font-bold">Total cotización:</span> {result}
         </p>
      </div>
   )
}
