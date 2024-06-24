export const increment = (num) => {
    return {
        type: "INCREMENT",
        payload:num
    }
}
export const decrement = (num) => {
    return {
        type:"DECREMENT",
        payload:num
    }
}
export const add = (val) => {
    return {
        type:"ADD",
        payload:val
    }
}
export const editt = (id,change) => {
    return {
        type:"EDIT",
        payload:{id,change}
    }
}
export const update = (id,change) => {
    return {
        type:"UPDATE",
        payload:{ id,change}
    }
}
export const deletee = (id) => {
    return {
        type:"DELETE",
        payload:id
    }
}