import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import astronaut from './assets/astronaut.png'
import spacebg1 from './assets/space-bg-1.png'
import moonbg1 from './assets/moon-bg-1.png'
import eartbg1 from './assets/earth-bg-1.png'

function App() {
  return (
    <Parallax
      pages={3.5}
      style={{
        backgroundImage: `url(${spacebg1})`,
        backgroundSize: 'cover'
      }}
    >
      <ParallaxLayer
        sticky={{ start: 0, end: 2.5 }}
        style={{
          backgroundImage: `url(${astronaut})`,
          backgroundSize: 'contain'
        }}
      />

      <ParallaxLayer
        offset={0.6} // page position (0 is first page)
        speed={0.05} // self exp
        factor={1.3} // how many apges to span
        style={{
          backgroundImage: `url(${moonbg1})`,
          backgroundSize: 'cover'
        }}
      />

      <ParallaxLayer
        offset={2}
        speed={0.05}
        factor={1.3}
        style={{
          backgroundImage: `url(${eartbg1})`,
          backgroundSize: 'cover'
        }}
      />
    </Parallax>
  )
}

export default App
