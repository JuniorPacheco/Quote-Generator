import { useState } from "react"
import QuoteText from "./QuoteText"

const Quote = ({randomQuote, randomColor, color, setColor}) => {
  const [quoteText, setQuoteText] = useState(randomQuote())

  return (
    <article className="quoteBox">
        <QuoteText quoteText={quoteText.quote} color={color}/>

    <div className="container-quoteAndAuthor">
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

    </article>
  )
}

export default Quote