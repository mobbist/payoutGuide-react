import { demo } from "../types/index";
import data from "../utils/data"
import { StirngtoArray } from "../utils/utils"
var dataArr: any = data;
//初始化state
import inistState from "../store/initState";
export const demoReduces = (state: demo = inistState.demo, action: any): demo => {
    switch (action.type) {
        case "getFullSchema":
            return Object.assign({}, state, { loadingState: true })
        case "getFullSchemaSccess":
            let payload = changeData(action.payload);
            return Object.assign({}, state, { loadingState: false }, { payload })
    }
    return state;
}


function changeData(data: any) {
    //收款银行信息
    let beneficiaryBank: any = {};
    //收款客户信息
    let beneficiaryDetails: any = {};
    //付款客户信息
    let payerDetails: any = {};
    //支付信息
    let paymentDetails: any = {};
    //其他信息
    let orderDetails: any = {};
    //支付方法
    for (let item in data) {
        if (item.indexOf("beneficiary.") != -1) {
            //判断BeneficiaryBank
            if (item.indexOf("beneficiary.bank_details.") != -1) {
                if (dataArr[item]) {
                    if (item == "beneficiary.bank_details.account_routing_type1") {
                        let routingType = data[item].validation_functions[0].args[0];
                        if (routingType) {
                            beneficiaryBank[item] = {
                                data: dataArr[item][routingType],
                                ...data[item]
                            };
                        }
                    } else {
                        beneficiaryBank[item] = {
                            data: dataArr[item],
                            ...data[item]
                        };
                    }

                }

            } else {
                if (dataArr[item]) {
                    beneficiaryDetails[item] = {
                        data: dataArr[item],
                        ...data[item]
                    };
                }
            }
        } else if (item.indexOf("payer.") != -1) {

            if (dataArr[item]) {
                payerDetails[item] = {
                    data: dataArr[item],
                    ...data[item]
                };
            } else {
            }
        } else if (item.indexOf("reason") != -1) {

            paymentDetails["reason"] = {
                data: dataArr["reason"],
                ...data[item]
            }
        } else if (item.indexOf("reference") != -1) {

            paymentDetails["reference"] = {
                data: dataArr["reference"],
                ...data[item]
            }
        } else {
            1
            if (item.indexOf("payment_method") != -1) {
                let method = StirngtoArray(data[item].func_desc, "OneOf([", "])");
                if (method.length == 1) {
                    orderDetails[item] = StirngtoArray(data[item].func_desc, 'IsEqual("', '")');
                } else {
                    orderDetails[item] = method
                }

            } else {
                orderDetails[item] = data[item];
            }
        }
    }

    let newData = {
        beneficiaryBank,
        beneficiaryDetails,
        payerDetails,
        paymentDetails,
        orderDetails
    }
    return newData;
}