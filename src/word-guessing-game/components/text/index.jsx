/* eslint-disable react/prop-types */
import "./style.css"
const TextSize = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
};


function Text({ size = TextSize.SMALL, children, content = "" }) {
  const className = `text_${size}`;
  return <div className={className}>{content ? content : children}</div>;
}


Text.TextSize = TextSize
export default Text;
