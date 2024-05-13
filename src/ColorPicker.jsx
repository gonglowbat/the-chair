import { useSnapshot } from 'valtio'
import { colors } from './colors'
import { state } from './state'

export default function ColorPicker() {
    const snap = useSnapshot(state)

    const handleOnClick = (color) => {
        state.selections[snap.activeOption] = { ...color }
    }

    const colorItems = colors.map((color, index) => {
        const style = {}

        if (color.texture) {
            style.backgroundImage = `url('${color.url}')`
        } else {
            style.background = `${color.color}`
        }

        return (
            <div
                className="tray__swatch"
                style={style}
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
                    {colorItems}
                </div>
            </div>
        </div>
    )
}
