import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const pillars = [
  {
    number: '01',
    title: 'Make it matter',
    copy: 'We build with intention. Every detail has a reason to be there.',
  },
  {
    number: '02',
    title: 'Stay curious',
    copy: 'The best work starts at the edge of what is known and asks one more question.',
  },
  {
    number: '03',
    title: 'Keep your word',
    copy: 'Ideas are promises. We show up, follow through, and leave things better.',
  },
]

function App() {
  return (
    <main>
      <nav className="nav shell" aria-label="Main navigation">
        <a className="wordmark" href="#top" aria-label="Scarlet Oath home">
          <span className="wordmark-mark">S<span>O</span></span>
          <span>Scarlet Oath</span>
        </a>
        <a className="nav-link" href="#manifesto">Our manifesto <span aria-hidden="true">↗</span></a>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> An independent creative house</p>
          <h1>Stories worth<br /><em>keeping.</em></h1>
          <p className="hero-intro">Scarlet Oath is a home for bold ideas, quiet details, and the people who believe that meaningful work leaves a mark.</p>
          <a className="button" href="#manifesto">Discover the oath <span aria-hidden="true">↓</span></a>
        </div>
        <div className="hero-art" aria-label="Scarlet Oath emblem" role="img">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <img src={`${import.meta.env.BASE_URL}logo.svg`} alt="" />
          <span className="art-caption">Est. 2024 <span>///</span> For the long story</span>
        </div>
      </section>

      <section className="manifesto shell" id="manifesto">
        <div className="section-label"><span>Manifesto</span><span>What we believe</span></div>
        <div className="manifesto-content">
          <h2>Not everything<br />needs to be <em>louder.</em></h2>
          <div className="manifesto-copy">
            <p>We are drawn to the honest, the considered, and the beautifully unfinished. Scarlet Oath is a creative practice for brands and stories that want to mean something beyond the moment.</p>
            <a className="text-link" href="mailto:hello@scarletoath.com">Start a conversation <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>

      <section className="pillars shell" aria-label="Our principles">
        {pillars.map((pillar) => (
          <article className="pillar" key={pillar.number}>
            <span className="pillar-number">{pillar.number}</span>
            <h3>{pillar.title}</h3>
            <p>{pillar.copy}</p>
          </article>
        ))}
      </section>

      <footer className="footer shell">
        <span>Scarlet Oath</span>
        <span>Made for the long story.</span>
        <a href="mailto:hello@scarletoath.com">hello@scarletoath.com <span aria-hidden="true">↗</span></a>
      </footer>
    </main>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode><App /></StrictMode>,
)
