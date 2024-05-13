import { useSnapshot } from 'valtio'
import { colors } from './colors'
import { state } from './state'
import { textures } from './textures'

export default function ColorPicker() {
    const snap = useSnapshot(state)

    const handleOnClick = (color) => {
        state.selections[snap.activePart] = { ...color }
    }

    const textureItems = textures.map((texture) => {
        return (
            <div
                className="tray__swatch"
                style={{ backgroundImage: `url('${texture.url}')` }}
                key={texture.texture}
                onClick={() => handleOnClick(texture)}
            />
        )
    })

    const colorItems = colors.map((color, index) => {
        return (
            <div
                className="tray__swatch"
                style={{ backgroundColor: `${color.color}` }}
                data-key={index}
                key={index}
                onClick={() => handleOnClick(color)}
            />
        )
    })

    return (
        <div className="controls color-picker">
            {/* <div class="info">
                <div class="info__message">
                    <p><strong>&nbsp;Grab&nbsp;</strong> to rotate chair. <strong>&nbsp;Scroll&nbsp;</strong> to zoom. <strong>&nbsp;Drag&nbsp;</strong> swatches to view more.</p>
                </div>
            </div> */}

            <div className="js-tray tray colors">
                <div className="js-tray-slide tray__slide color">
                    {textureItems}
                    {colorItems}
                </div>
            </div>
        </div>
    )
}
