export function isEmpty(str: any) {
    if(str === "" || str === null || str === undefined || str === "undefined") {
        return true;
    } else {
        return false;
    }
}