import logo from "../assets/mainlogo.png"

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="logo" className="w-48 object-contain" />
        
        <button 
        type="button"
        onClick={() => window.open('https://twitter.com/dNeoteric_One')}
        className="black_btn font-bold"
        >
  Twitter
        </button>
      </nav>
      <h1 className="head_text text-tertiary">Summarize Your Articles with <br className="max-md:hidden" /> <span className="orange_gradient">OpenAI GPT-4</span>
       </h1>
       <h2 className="desc">
        Tired of reading lengthy articles? Use the <span className="text-tertiary font-bold">Enigma AI Summarizer</span>  to transform long boring articles into clear and concise summaries  
       </h2>
    </header>
  )
}

export default Hero 