import { useSnapshot } from "valtio"
import { state } from "./state"

export default function ChairOption() {
    const snap = useSnapshot(state)

    const options = [
        { option: 'legs', img: '/icons/legs.svg', alt: 'Chair leg' },
        { option: 'cushions', img: '/icons/cushions.svg', alt: 'Chair cushions' },
        { option: 'base', img: '/icons/base.svg', alt: 'Chair base' },
        { option: 'supports', img: '/icons/supports.svg', alt: 'Chair supports' },
        { option: 'back', img: '/icons/back.svg', alt: 'Chair back' },
    ]

    return (
        <div className="chair-options">
            {options.map((option) => {
                return (
                    <div
                        className={`chair-option ${snap.activeOption === option.option ? '--is-active' : ''} `}
                        data-option={option.option}
                        key={option.option}
                        onClick={() => state.activeOption = option.option}
                    >
                        <img src={option.img} alt={options.alt}/>
                    </div>
                )
            })}
        </div>
    )
}
