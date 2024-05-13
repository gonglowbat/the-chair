import * as THREE from 'three'
import { useGLTF, useTexture } from '@react-three/drei'
import { useSnapshot } from 'valtio'
import { colors } from './colors'
import { state } from './state'

export default function Chair() {
    const snap = useSnapshot(state)

    const { nodes } = useGLTF('./models/chair.glb')

    const [wood, denim, fabric, pattern, quilt] = useTexture([
        colors[0].url,
        colors[1].url,
        colors[2].url,
        colors[3].url,
        colors[4].url,
    ])

    wood.repeat.set(colors[0].repeat[0], colors[0].repeat[1])
    wood.wrapS = THREE.RepeatWrapping
    wood.wrapT = THREE.RepeatWrapping
    wood.colorSpace = THREE.SRGBColorSpace

    denim.repeat.set(colors[1].repeat[0], colors[1].repeat[1])
    denim.wrapS = THREE.RepeatWrapping
    denim.wrapT = THREE.RepeatWrapping
    denim.colorSpace = THREE.SRGBColorSpace

    fabric.repeat.set(colors[2].repeat[0], colors[2].repeat[1])
    fabric.wrapS = THREE.RepeatWrapping
    fabric.wrapT = THREE.RepeatWrapping
    fabric.colorSpace = THREE.SRGBColorSpace

    pattern.repeat.set(colors[3].repeat[0], colors[3].repeat[1])
    pattern.wrapS = THREE.RepeatWrapping
    pattern.wrapT = THREE.RepeatWrapping
    pattern.colorSpace = THREE.SRGBColorSpace

    quilt.repeat.set(colors[4].repeat[0], colors[4].repeat[1])
    quilt.wrapS = THREE.RepeatWrapping
    quilt.wrapT = THREE.RepeatWrapping
    quilt.colorSpace = THREE.SRGBColorSpace

    const textures = { wood, denim, fabric, pattern, quilt }

    return (
        <group
            dispose={null}
            scale={0.2}
            position-y={-1}
        >
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.legs.geometry}
                material={new THREE.MeshPhongMaterial()}
                material-color={snap.selections.legs.color || null}
                material-map={textures[snap.selections.legs.texture]}
                material-shininess={snap.selections.legs.shininess || 10}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.cushions.geometry}
                material={new THREE.MeshPhongMaterial()}
                material-color={snap.selections.cushions.color || null}
                material-map={textures[snap.selections.cushions.texture]}
                material-shininess={snap.selections.cushions.shininess || 10}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.base.geometry}
                material={new THREE.MeshPhongMaterial()}
                material-color={snap.selections.base.color || null}
                material-map={textures[snap.selections.base.texture]}
                material-shininess={snap.selections.base.shininess || 10}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.supports.geometry}
                material={new THREE.MeshPhongMaterial()}
                material-color={snap.selections.supports.color || null}
                material-map={textures[snap.selections.supports.texture]}
                material-shininess={snap.selections.supports.shininess || 10}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.back.geometry}
                material={new THREE.MeshPhongMaterial()}
                material-color={snap.selections.back.color || null}
                material-map={textures[snap.selections.back.texture]}
                material-shininess={snap.selections.back.shininess || 10}
            />
        </group>
    )
}
