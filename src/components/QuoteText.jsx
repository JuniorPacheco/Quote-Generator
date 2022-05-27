const QuoteText = ({quoteText, color}) => {

  return (
    <p className="quoteText" style={{color: color}}>{quoteText}</p>
  )
}

export default QuoteText