import { Fragment } from "react";
import { MARCAS, PLANS, YEARS } from "../constants";

export default function Formulario() {
   return (
      <>
         <form>
            <div className="my-5">
               <label htmlFor="marca" className="block mb-3 font-bold text-gray-400 uppercase">Marca</label>
               <select name="marca" id="marca" className=" w-full p-3 bg-white border border-gray-300">
                  <option value="">--Seleccione marca--</option>
                  {
                     MARCAS.map(marca => (
                        <option key={marca.id} value={marca.id}>{marca.nombre}</option>
                     ))
                  }
               </select>
            </div>

            <div className="my-5">
               <label htmlFor="año" className="block mb-3 font-bold text-gray-400 uppercase">Año</label>
               <select name="año" id="año" className=" w-full p-3 bg-white border border-gray-300">
                  <option value="">--Selecciona año--</option>
                  {
                     YEARS.map(year => (
                        <option key={year} value={year}>{year}</option>
                     ))
                  }
               </select>
            </div>

            <div className="my-5">
               <label htmlFor="plan" className="block mb-3 font-bold text-gray-400 uppercase">Elige un plan</label>
               <div className="flex gap-3">
                  {
                     PLANS.map(plan => (
                        <Fragment key={plan.id}>
                           <label htmlFor="">{plan.nombre}</label>
                           <input type="radio" name="plan" value={plan.id} />
                        </Fragment>
                     ))
                  }
               </div>
            </div>

            <input type="submit" className="w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold" value="Cotizar" />
         </form>
      </>
   )
}
