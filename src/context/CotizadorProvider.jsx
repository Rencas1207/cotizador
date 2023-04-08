import { createContext, useState } from 'react';
import { calculateMark, calculatePlan, formatMoney, getDifferenceYear } from '../helpers';

const CotizadorContext = createContext();

export const CotizadorProvider = ({ children }) => {
   const [datos, setDatos] = useState({
      marca: '',
      year: '',
      plan: ''
   })

   const [result, setResult] = useState(0);
   const [loading, setLoading] = useState(false);

   const handleChangeDatos = e => {
      setDatos({
         ...datos,
         [e.target.name]: e.target.value
      })
   }

   const cotizarSeguro = () => {
      // base
      let result = 2000;

      // Obtener diferencias de año
      const difference = getDifferenceYear(datos.year);

      // Restar 3% por cada año
      result -= difference * 3 * result / 100;
      // console.log(result);

      // Europeo 30%
      // Americano 15%
      // Asiatico 5%
      result *= calculateMark(datos.marca);

      // Basico 20%
      // Completo 50%
      result *= calculatePlan(datos.plan);

      // Formatear Dinero
      result = formatMoney(result);

      setLoading(true);
      setTimeout(() => {
         setResult(result);
         setLoading(false);
      }, 3000);

   }

   const [error, setError] = useState('');

   return (
      <CotizadorContext.Provider
         value={{
            datos,
            handleChangeDatos,
            error,
            setError,
            cotizarSeguro,
            result,
            loading
         }}
      >
         {children}
      </CotizadorContext.Provider>
   )
}

export default CotizadorContext;