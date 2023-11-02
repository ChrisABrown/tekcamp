import React from 'react'
import FormInputs from '../components/FormInputs'

export const AdminDashboard = (props) => {
  return (
    <div>
      {props.stock.map(({ item_name, quantity, price, SKU }) => {
        return (
          <div className='inventory'>
            <ul id='admin_list'>
              <li>
                {item_name}
                <FormInputs />
                <ul>
                  <li>{quantity}</li>
                  <FormInputs />
                  <li>${price}</li>
                  <FormInputs />
                  <li>{SKU}</li>
                  <FormInputs />
                </ul>
              </li>
            </ul>
          </div>
        )
      })}
    </div>
  )
}
