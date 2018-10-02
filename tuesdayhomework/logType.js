function logType(i) {
    if (typeof i === "string") {
        console.log("String!");
    } else if (typeof i === "function") {
        console.log("Function!");
    } else if (Array.isArray(i)) {
        console.log("Array!");
    } else if (typeof i === "undefined") {
        console.log("Undefined!");
    } else if (i === null) {
        console.log("Null!");
    } else if (typeof i === "object") {
        console.log("Object!");
    } else if (isNaN(i)) {
        console.log("Not a number!");
    } else if (typeof i === "number") {
        console.log("Number!");
    } else if (i === true || i === false) {
        console.log("Boolean!");
    } else {
        console.log("I have no idea");
    }
}
