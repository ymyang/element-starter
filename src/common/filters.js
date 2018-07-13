export function date(value) {
    if (!value) {
        return
    }
    const d = new Date(value)
    const m = d.getMonth() + 1
    return d.getFullYear() + '-' + m + '-' + d.getDate()
}
