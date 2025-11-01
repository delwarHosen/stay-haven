export const replaceMongoInArray = (array) => {
    const replaceArray = array.map(item => {
        return {
            id: item._id.toString(),
            ...item
        }
    }).map(({ _id, ...rest }) => rest);

    return replaceArray
}


export const replaceMongoInObject = (obj) => {
    const { _id, ...updateObj } = { ...obj, id: obj._id.toString() };
    return updateObj;
}


export const isDateInBetween = (date, from, to) => {
    return (new Date(date).getTime() >= new Date(from).getTime() && new Date(date).getTime() <= new Date(to).getTime())
}