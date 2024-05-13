import { Canvas } from '@react-three/fiber'
import { Leva } from 'leva'
import Experience from './Experience'
import ColorPicker from './ColorPicker'
import ChairOption from './ChairOption'

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
                <Experience />
            </Canvas>

            <ColorPicker />
            <ChairOption />
        </>
    )
}
