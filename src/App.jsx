import { Canvas, useThree } from '@react-three/fiber'
import { useProgress } from '@react-three/drei'
import { EffectComposer, Outline, Selection, ToneMapping } from '@react-three/postprocessing'
import { Leva } from 'leva'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import Experience from './Experience'
import OptionPicker from './OptionPicker'
import ChairParts from './ChairParts'
import Loader from './Loader'

export const App = () => {
    const { progress } = useProgress()

    return (
        <>
            { progress !== 100 ? <Loader /> : null }

            <Leva
                collapsed={false}
                oneLineLabels={true}
            />

            <Canvas
                flat
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

                <Selection>
                    <Effects />
                    <Experience />
                </Selection>
            </Canvas>

            <OptionPicker />
            <ChairParts />

            <Analytics />
            <SpeedInsights />
        </>
    )
}

const Effects = () => {
    const { size } = useThree()

    return (
        <EffectComposer autoClear={false}>
            <Outline
                visibleEdgeColor="white"
                hiddenEdgeColor="white"
                blur
                width={size.width * 1.25}
                edgeStrength={10}
            />
            {/* <ToneMapping /> */}
        </EffectComposer>
    )
}
