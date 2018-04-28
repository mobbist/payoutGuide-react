export interface FullSchema {
    type: string,
}

export function getFullSchema(dispatch: any, args: any): FullSchema {
    sendrequist(dispatch, "http://127.0.0.1:3000/getFullSchema", "getFullSchemaSccess", JSON.stringify(args));
    return {
        type: "getFullSchema",
    }
}



function sendrequist(dispatch: any, url: string, type: string, body?: string) {
    return new Promise((resolve, reject) => {
        let p1 = fetch(url, {
            method: "POST",
            body: body
        }).then((res: any) => {
            return res.json();
        }).then((res: any) => {
            dispatch({
                type: type,
                payload: res
            });

        })

    })
}

