const inject = (items, sections) => {
    let offset = 0
    sections.forEach(element => {
        let injectIndex = element.index + offset
        items.splice(injectIndex, 0, element.content)
        offset = calcOffset(offset, element.index)    
    })
    return items
}

const calcOffset = (old, nowIndex) => {
    if (old > nowIndex)
        return old
    else 
        return old + 1
}

export { inject };
