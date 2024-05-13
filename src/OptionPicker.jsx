import { useSnapshot } from 'valtio'
import { colors } from './colors'
import { state } from './state'
import { textures } from './textures'

export default function OptionPicker() {
    const snap = useSnapshot(state)

    const handleOnClick = (color) => {
        state.selections[snap.activePart] = { ...color }
    }

    const textureItems = textures.map((texture) => {
        return (
            <div
                className="option"
                style={{ backgroundImage: `url('${texture.url}')` }}
                key={texture.texture}
                onClick={() => handleOnClick(texture)}
            />
        )
    })

    const colorItems = colors.map((color) => {
        return (
            <div
                className="option"
                style={{ backgroundColor: `${color.color}` }}
                key={color.color}
                onClick={() => handleOnClick(color)}
            />
        )
    })

    return (
        <div className="controls">
            <div className="credits">
                <b>Credits: </b>
                <a
                    href="https://tympanus.net/codrops/2019/09/17/how-to-build-a-color-customizer-app-for-a-3d-model-with-three-js/"
                    target="_blank"
                >
                    Original Article
                </a>
            </div>

            <div className="options">
                <div className="options-slide">
                    {textureItems}
                    {colorItems}
                </div>
            </div>
        </div>
    )
}
