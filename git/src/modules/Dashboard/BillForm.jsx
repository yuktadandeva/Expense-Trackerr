import React from 'react'
import { Input } from '../../shared/Widgets/Input'
import { Button } from '../../shared/Widgets/Button'
export const BillForm = ({fn,fn2,fn3}) => {
  return (
    <div>
        <label htmlFor="">TOTAL BILL &nbsp;</label>
        <Input fn={fn} val="Enter Amount"></Input><br></br>
        <label htmlFor="">ACTIVITY</label>&nbsp;
        <Input fn={fn3}></Input>
        <Button val="Split Bill" fn2={fn2}></Button>
    </div>
  )
}
