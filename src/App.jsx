import { Canvas } from '@react-three/fiber'
import { Leva } from 'leva'
import Experience from './Experience'
import OptionPicker from './OptionPicker'
import ChairParts from './ChairParts'

export default function App() {
    return (
        <>
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
        </>
    )
}
