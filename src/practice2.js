// TODO 逻辑纰漏，当sections内items顺序不是index顺序时会有问题
// TODO 从先排序sections 和 反向插入 方面思考如何改进
const inject = (items, sections) => {
    let offset = 0
    sections.forEach(element => {
        let injectIndex = element.index + offset
        items.splice(injectIndex, 0, element.content)
        offset = calcOffset(offset, element.index)    
    })
    return items
}

// TODO 参数命名一般我们用 prev 和 curr
const calcOffset = (old, nowIndex) => {
    if (old > nowIndex)
        return old
    else 
        return old + 1
}

export { inject };
