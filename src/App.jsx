import { useRef } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import twerkingpig from './assets/twerking-pig.gif'
import spacebg1 from './assets/space-bg-1.png'
import moonbg1 from './assets/moon-bg-1.png'
import eartbg1 from './assets/earth-bg-1.png'
import buildingsbg1 from './assets/buildings-bg-1.png'

/* Example of ParallaxLayer:
 * <ParallaxLayer
 *   offset={0} // start position
 *   speed={1} // speed of scroll
 *   factor={2} // pages to span
 *   style={{ background: `url(img)` }}
 *   sticky={{ start: 0, end: 0.5 }} // fixed position start and end
 * />
 */

function App() {
  const ref = useRef()

  return (
    <Parallax
      pages={4}
      ref={ref}
      style={{
        backgroundImage: `url(${spacebg1})`,
        backgroundSize: 'cover'
      }}
    >
      <ParallaxLayer
        offset={2}
        factor={1}
        sticky={{ start: 0, end: 0.5 }}
        onClick={() => ref.current.scrollTo(3)}
      >
        <h1 className="title">
          <em>enjoy</em>
        </h1>
      </ParallaxLayer>

      <ParallaxLayer
        sticky={{ start: 0.6, end: 2.5 }}
        style={{
          backgroundImage: `url(${twerkingpig})`,
          backgroundSize: '20%',
          backgroundPosition: 'center'
        }}
      />

      <ParallaxLayer
        offset={1}
        speed={1.5}
        factor={1.3}
        style={{
          backgroundImage: `url(${moonbg1})`,
          backgroundSize: 'cover'
        }}
      />

      <ParallaxLayer
        offset={2}
        speed={0.5}
        factor={1.3}
        style={{
          backgroundImage: `url(${eartbg1})`,
          backgroundSize: 'cover',
          backgroundPosition: '100%, 50%'
        }}
      />

      <ParallaxLayer
        offset={2.8}
        factor={1.3}
        style={{
          backgroundImage: `url(${buildingsbg1})`,
          backgroundSize: 'cover'
        }}
      />
    </Parallax>
  )
}

export default App
