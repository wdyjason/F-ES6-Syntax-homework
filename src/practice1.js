const parseData = (input) => {
    const {data, column} = input
    const result = data.map(rowData=> {
        let returnRowData = {}
        rowData.forEach((e, index) => {
            returnRowData[column[index].name] = rowData[index]
        })
        return returnRowData
    })
    return result
}

export { parseData };
