import { useSnapshot } from "valtio"
import { parts } from "../data/parts"
import { state } from "../stores/state"

export default function ChairParts() {
    const snap = useSnapshot(state)

    return (
        <div className="chair-parts">
            {parts.map((part) => {
                return (
                    <div
                        className={`chair-part ${snap.activePart === part.name ? '--is-active' : ''} `}
                        key={part.name}
                        onClick={() => state.activePart = part.name}
                    >
                        <img src={part.img} alt={parts.alt}/>
                    </div>
                )
            })}
        </div>
    )
}
