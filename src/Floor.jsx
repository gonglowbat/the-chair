export default function Floor() {
    return (
        <mesh
            position-y={-1}
            rotation-x={-0.5 * Math.PI}
            receiveShadow
        >
            <planeGeometry args={[5000, 5000, 1, 1]} />
            <meshPhongMaterial color={0xf1f1f1} shininess={0} />
        </mesh>
    )
}
