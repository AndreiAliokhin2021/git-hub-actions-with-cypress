export const isSuperSet = ((set, subSet) => {
    for (let elem of subSet) {
        if (!set.has(elem)) {
            return false
        }
    }
    return true
})

export const union = ((set1, set2) => new Set([...set1, ...set2]))

export const intersection = (set1, set2) => new Set([...set1].filter(element => set2.has(element)))

export const difference = (set1, set2) => {
    set1.delete(set2)
    return set1
}



