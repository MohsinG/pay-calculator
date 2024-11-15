import React from 'react'
import PriceDisplay from '../price-display/PriceDisplay'
import PayCycleSelector from '../pay-cycle-selector/PayCycleSelector'

const IncomeContainer = () => {
  return (
    <div className='flex space-x-4 justify-between'><PriceDisplay></PriceDisplay><PayCycleSelector></PayCycleSelector></div>
  )
}

export default IncomeContainer