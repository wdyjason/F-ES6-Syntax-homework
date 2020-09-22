// TODO 可以思考一下可否用reduce来做
const parseData = (input) => {
    // TODO 解构可以优化到函数接受参数中
    const {data, column} = input
    const result = data.map(rowData=> {
        let returnRowData = {}
        // TODO 这里 rowData[index] 不就是 e 吗？
        rowData.forEach((e, index) => {
            returnRowData[column[index].name] = rowData[index]
        })
        return returnRowData
    })
    return result
}

export { parseData };
