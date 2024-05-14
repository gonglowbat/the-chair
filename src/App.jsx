import { Canvas } from '@react-three/fiber'
import { useProgress } from '@react-three/drei'
import { Leva } from 'leva'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import Experience from './Experience'
import OptionPicker from './OptionPicker'
import ChairParts from './ChairParts'
import Loader from './Loader'

export default function App() {
    const { progress } = useProgress()

    return (
        <>
            { progress !== 100 ? <Loader /> : null }

            <Leva collapsed={false} oneLineLabels={true} />
            <Canvas
                shadows
                camera={{
                    fov: 50,
                    near: 0.1,
                    far: 100,
                    position: [0, 0, 5],
                }}
            >
                <color attach="background" args={['#f1f1f1']} />
                <fog attach="fog" args={['#f1f1f1', 10, 80]} />
                <Experience />
            </Canvas>

            <OptionPicker />
            <ChairParts />

            <Analytics />
            <SpeedInsights />
        </>
    )
}
