import React from 'react'

const PayCycleSelector = () => {
  return (
    <div className='w-full p-2 bg-yellow'>
      <label
        htmlFor="PayCycleSelector"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        Pay Cycle
      </label>
      <div className="relative mt-2 rounded-md shadow-sm max-w-80">
        <select class="mt-1 block w-full">
                  <option>Annually</option>
                  <option>Monthly</option>
                  <option>Fortnightly</option>
                  <option>Weekly</option>
                  <option>Daily</option>
                  <option>Hourly</option>
                </select>
      </div>
    </div>
  )
}

export default PayCycleSelector