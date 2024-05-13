import * as THREE from 'three'
import { OrbitControls } from '@react-three/drei'
import { useEffect } from 'react'
import { Perf } from 'r3f-perf'
import { useControls } from 'leva'
import { useThree } from '@react-three/fiber'
import Chair from './Chair'
import Floor from './Floor'

export default function Experience() {
    const { gl } = useThree()

    const renderer = useControls('Render', {
        toneMapping: { options: {
            ACESFilmicToneMapping: THREE.ACESFilmicToneMapping,
            LinearToneMapping: THREE.LinearToneMapping,
            ReinhardToneMapping: THREE.ReinhardToneMapping,
            CineonToneMapping: THREE.CineonToneMapping,
            AgXToneMapping: THREE.AgXToneMapping,
            NeutralToneMapping: THREE.NeutralToneMapping,
            CustomToneMapping: THREE.CustomToneMapping,
            NoToneMapping: THREE.NoToneMapping,
        }},
    })

    useEffect(() => {
        gl.toneMapping = renderer.toneMapping
    }, [renderer.toneMapping])

    return <>

        <Perf position="top-left" />

        <OrbitControls
            makeDefault
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 2}
            enableDamping
            enablePan={false}
            dampingFactor={0.1}
            autoRotate={false}
            autoRotateSpeed={1}
        />

        <hemisphereLight
            intensity={1}
            position-y={50}
        />

        <directionalLight
            intensity={2}
            position={[-8, 12, 8]}
            castShadow
            shadow-mapSize={[1024, 1024]}
        />

        <Floor />
        <Chair/>
    </>
}
