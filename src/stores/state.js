import { proxy } from "valtio"

export const state = proxy({
    activePart: 'legs',
    selections: {
        legs: { color: '#f1f1f1' },
        back: { color: '#f1f1f1' },
        base: { color: '#f1f1f1' },
        cushions: { color: '#f1f1f1' },
        supports: { color: '#f1f1f1' },
    },
})
