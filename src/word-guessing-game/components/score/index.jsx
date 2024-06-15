import Text from "../text"
import "./style.css"
// eslint-disable-next-line react/prop-types
function Score({score}) {
  return (
    <div className="score-container">
        <Text  size={Text.TextSize.LARGE} content="Score" />
        <Text size={Text.TextSize.MEDIUM}>{score ?? 0}</Text>
    </div>
  )
}
export default Score