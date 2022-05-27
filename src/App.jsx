import QuoteBox from './components/QuoteBox'
import quotes from './json/quotes.json'
function App() {
  const colors = ['#00744d', '#7a0ce8', '#c12e2b', '#181623', '#00507a', '#d49405', '#00ab61', '#0081ce', '#ce5037', '#8a40c1']
  
  const randomIndex = array => {
    return Math.floor(array.length*Math.random());
  }
  
  const randomQuote = () => {
    return quotes[randomIndex(quotes)];
  }
  
  const randomColor = () => {
    return colors[randomIndex(colors)]
  }

  return (
    <main className="principal" style={{backgroundColor: color}}>
      <QuoteBox randomQuote={randomQuote} randomColor={randomColor}/>
    </main>
  )
}

export default App
