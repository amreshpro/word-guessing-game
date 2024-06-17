/* eslint-disable react/prop-types */
import "./style.css"

function Input({value='',maxLength=524288,onInput=()=>{}}) {
  return (
<input type="text" onInput={onInput} defaultValue={value} maxLength={maxLength} />
)
}
export default Input