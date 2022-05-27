import { useState } from "react"
import QuoteText from "./QuoteText"

const Quote = ({randomQuote, randomColor}) => {
  const [color, setColor] = useState(randomColor());
  const [quoteText, setQuoteText] = useState(randomQuote())

  
  return (
    <article className="quoteBox">
      <QuoteText quoteText={quoteText.quote} color={color}/>

      <div className="containerQuote">

        <div 
        className="quoteMarks" 
        style={{color: color}}
        >
          <i className='bx bxs-quote-left'></i>
        </div>

        <div className="containerQuote__authorAndButton">

          <div>
            <p style={{color: color}}>{quoteText.author}</p>
          </div>

          <div 
          className="buttonNextQuote" 
          style={{backgroundColor: color}}
          onClick={()=>{setColor(randomColor()); setQuoteText(randomQuote())}}
          >
            <i className='bx bx-chevron-right'></i>
          </div>
        </div>

        </div>

    </article>
  )
}

export default Quote