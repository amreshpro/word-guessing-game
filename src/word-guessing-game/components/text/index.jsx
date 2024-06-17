/* eslint-disable react/prop-types */
import "./style.css"
const TextSize = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
};


function Text({ size = TextSize.SMALL, children, content = "" ,className=''}) {
  const updatedClassName = `text_${size}  ${className}`;
  return <div className={updatedClassName}>{content ? content : children}</div>;
}


Text.TextSize = TextSize
export default Text;
