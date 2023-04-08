import { createContext, useState } from 'react';
import { getDifferenceYear } from '../helpers';

const CotizadorContext = createContext();

export const CotizadorProvider = ({ children }) => {
   const [datos, setDatos] = useState({
      marca: '',
      year: '',
      plan: ''
   })

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
      console.log(difference)

      // Restar 3% por cada año
      result -= difference * 3 * result / 100;
      console.log(result);

      // Americano 15%
      // Europeo 30%
      // Asiatico 5%


      // Basico 20%
      // Completo 50%
   }

   const [error, setError] = useState('');

   return (
      <CotizadorContext.Provider
         value={{
            datos,
            handleChangeDatos,
            error,
            setError,
            cotizarSeguro
         }}
      >
         {children}
      </CotizadorContext.Provider>
   )
}

export default CotizadorContext;