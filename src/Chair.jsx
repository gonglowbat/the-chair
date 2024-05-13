import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { useSnapshot } from 'valtio'
import { state } from './state'

export default function Chair() {
    const snap = useSnapshot(state)

    const { nodes } = useGLTF('./models/chair.glb')

    return (
        <group
            dispose={null}
            scale={0.2}
            position-y={-1}
        >
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.back.geometry}
                material={new THREE.MeshPhongMaterial({ shininess: 10 })}
                material-color={snap.selections.back.color}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.base.geometry}
                material={new THREE.MeshPhongMaterial({ shininess: 10 })}
                material-color={snap.selections.base.color}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.cushions.geometry}
                material={new THREE.MeshPhongMaterial({ shininess: 10 })}
                material-color={snap.selections.cushions.color}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.supports.geometry}
                material={new THREE.MeshPhongMaterial({ shininess: 10 })}
                material-color={snap.selections.supports.color}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.legs.geometry}
                material={new THREE.MeshPhongMaterial({ shininess: 10 })}
                material-color={snap.selections.legs.color}
            />
        </group>
    )
}
