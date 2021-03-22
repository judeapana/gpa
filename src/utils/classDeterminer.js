export const classDeterminer = (value) => {
    if (value >= 4.5) {
        return "First Class Upper"
    } else if (value >= 3.5) {
        return "Second Class Upper"
    } else if (value >= 2.5) {
        return "Second Class Lower"
    } else if (value >= 0) {
        return "Lower"
    }
}
