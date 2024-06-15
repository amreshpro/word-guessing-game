/* eslint-disable react/prop-types */
import "./style.css"

function Input({value=''}) {
  return (
<input type="text" defaultValue={value} />
)
}
export default Input