import * as THREE from 'three'
import { useGLTF, useTexture } from '@react-three/drei'
import { Select } from '@react-three/postprocessing'
import { useSnapshot } from 'valtio'
import { state } from './state'
import { textures } from './textures'

export default function Chair() {
    const snap = useSnapshot(state)

    const { nodes } = useGLTF('./models/chair.glb')

    const [wood, denim, fabric, pattern, quilt] = useTexture([
        textures[0].url,
        textures[1].url,
        textures[2].url,
        textures[3].url,
        textures[4].url,
    ])

    wood.repeat.set(textures[0].repeat[0], textures[0].repeat[1])
    wood.wrapS = THREE.RepeatWrapping
    wood.wrapT = THREE.RepeatWrapping
    wood.colorSpace = THREE.SRGBColorSpace

    denim.repeat.set(textures[1].repeat[0], textures[1].repeat[1])
    denim.wrapS = THREE.RepeatWrapping
    denim.wrapT = THREE.RepeatWrapping
    denim.colorSpace = THREE.SRGBColorSpace

    fabric.repeat.set(textures[2].repeat[0], textures[2].repeat[1])
    fabric.wrapS = THREE.RepeatWrapping
    fabric.wrapT = THREE.RepeatWrapping
    fabric.colorSpace = THREE.SRGBColorSpace

    pattern.repeat.set(textures[3].repeat[0], textures[3].repeat[1])
    pattern.wrapS = THREE.RepeatWrapping
    pattern.wrapT = THREE.RepeatWrapping
    pattern.colorSpace = THREE.SRGBColorSpace

    quilt.repeat.set(textures[4].repeat[0], textures[4].repeat[1])
    quilt.wrapS = THREE.RepeatWrapping
    quilt.wrapT = THREE.RepeatWrapping
    quilt.colorSpace = THREE.SRGBColorSpace

    const mapTextures = { wood, denim, fabric, pattern, quilt }

    return (
        <group
            dispose={null}
            scale={0.2}
            position-y={-1}
        >
            <Select enabled={snap.activePart === 'legs'}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.legs.geometry}
                    material={new THREE.MeshPhongMaterial()}
                    material-color={snap.selections.legs.color || null}
                    material-map={mapTextures[snap.selections.legs.texture]}
                    material-shininess={snap.selections.legs.shininess || 10}
                />
            </Select>
            <Select enabled={snap.activePart === 'cushions'}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.cushions.geometry}
                    material={new THREE.MeshPhongMaterial()}
                    material-color={snap.selections.cushions.color || null}
                    material-map={mapTextures[snap.selections.cushions.texture]}
                    material-shininess={snap.selections.cushions.shininess || 10}
                />
            </Select>
            <Select enabled={snap.activePart === 'base'}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.base.geometry}
                    material={new THREE.MeshPhongMaterial()}
                    material-color={snap.selections.base.color || null}
                    material-map={mapTextures[snap.selections.base.texture]}
                    material-shininess={snap.selections.base.shininess || 10}
                />
            </Select>
            <Select enabled={snap.activePart === 'supports'}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.supports.geometry}
                    material={new THREE.MeshPhongMaterial()}
                    material-color={snap.selections.supports.color || null}
                    material-map={mapTextures[snap.selections.supports.texture]}
                    material-shininess={snap.selections.supports.shininess || 10}
                />
            </Select>
            <Select enabled={snap.activePart === 'back'}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.back.geometry}
                    material={new THREE.MeshPhongMaterial()}
                    material-color={snap.selections.back.color || null}
                    material-map={mapTextures[snap.selections.back.texture]}
                    material-shininess={snap.selections.back.shininess || 10}
                />
            </Select>
        </group>
    )
}
