import * as THREE from 'three'
import { OrbitControls } from '@react-three/drei'
import { useEffect } from 'react'
import { Perf } from 'r3f-perf'
import { useControls } from 'leva'
import { useThree } from '@react-three/fiber'
import Chair from './Chair'
import Floor from './Floor'

export default function Scene() {
    const { gl } = useThree()

    const performanceMeter = useControls('PerformanceMeter', {
        visible: true,
    })

    const orbitControls = useControls('OrbitControls', {
        autoRotate: false,
        autoRotateSpeed: { value: 1, min: 1, max: 10, step: 1 },
    })

    const renderer = useControls('Render', {
        toneMapping: {
            options: {
                ACESFilmicToneMapping: THREE.ACESFilmicToneMapping,
                LinearToneMapping: THREE.LinearToneMapping,
                ReinhardToneMapping: THREE.ReinhardToneMapping,
                CineonToneMapping: THREE.CineonToneMapping,
                AgXToneMapping: THREE.AgXToneMapping,
                NeutralToneMapping: THREE.NeutralToneMapping,
                CustomToneMapping: THREE.CustomToneMapping,
                NoToneMapping: THREE.NoToneMapping,
            },
        },
    })

    const shadowMap = useControls('ShadowMapType', {
        type: {
            options: {
                PCFSoftShadowMap: THREE.PCFSoftShadowMap,
                BasicShadowMap: THREE.BasicShadowMap,
                PCFShadowMap: THREE.PCFShadowMap,
                VSMShadowMap: THREE.VSMShadowMap,
            },
        },
    })

    const outputColorSpace = useControls('OutputColorSpace', {
        outputColorSpace: {
            options: {
                SRGBColorSpace: THREE.SRGBColorSpace,
                LinearSRGBColorSpace: THREE.LinearSRGBColorSpace,
            },
        },
    })

    useEffect(() => {
        gl.toneMapping = renderer.toneMapping
    }, [renderer.toneMapping])

    useEffect(() => {
        gl.shadowMap.type = shadowMap.type
    }, [shadowMap.type])

    useEffect(() => {
        gl.outputColorSpace = outputColorSpace.outputColorSpace
    }, [outputColorSpace.outputColorSpace])

    return <>

        { performanceMeter.visible ? <Perf position="top-left" /> : null }

        <OrbitControls
            makeDefault
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 2}
            enableDamping
            enablePan={false}
            dampingFactor={0.1}
            autoRotate={orbitControls.autoRotate}
            autoRotateSpeed={orbitControls.autoRotateSpeed}
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
