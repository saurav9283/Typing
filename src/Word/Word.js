import './Word.css'
export default function Word(props) {
  const { text, active, correct } = props;
  if (correct === true) {
    return <span className="Correct">{text} </span>;
  }

  if (correct === false) {
    return <span className="InCorrect">{text} </span>;
  }
  if (active) {
    return <span  className="Active">{text} </span>;
  }
  return <span  className="Text">{text} </span>;
}
