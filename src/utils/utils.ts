export function StirngtoArray(str: string, leftrexp: string, rightrexp: string) {
    let arr = str.split(', ')
    arr[0] = arr[0].replace(leftrexp, "");
    arr[arr.length - 1] = arr[arr.length - 1].replace(rightrexp, "");
    return arr;
}