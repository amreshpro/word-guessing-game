/* eslint-disable react/prop-types */
import './style.css'
const ButtonType = {
    CIRCULAR:'circular',
    ROUNDED:'rounded'
}

function Button({label='',className='',children,type=ButtonType.CIRCULAR,onClick=()=>{}}) {

  return (
    <button onClick={onClick} className={`${className} btn_${type} `} >{label? label :children}</button>
  )
}

Button.ButtonType = ButtonType
export default Button