import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import BlockOne from './components/BlockOne'
import ScrollingHorizontally from './components/Slider'
import julia1 from './assets/main/julia.png'
import julia2 from './assets/main/julia2.png'
import taisia1 from './assets/main/taisiia1.png'
import taisia2 from './assets/main/taisiia2.png'
import BlockTu from './components/BlockTu'

function App() {
  return (
    <div className="App">
      <Header />
      <main className="content">
        <BlockOne photo={julia1} />
        <BlockTu photo={taisia1} />
        <ScrollingHorizontally />
        <BlockOne photo={julia2} />
        <BlockTu photo={taisia2} />
      </main>
      <Footer />
    </div>
  )
}

export default App
