import * as React from "react"
import CustomSelect from "../components/customSelect"

import { StirngtoArray } from "../utils/utils"
export interface Props {
    payload: any
    currentCountry: string
    localCurrency: string
    paymentMethod: string
    payerType: string
    BeneficiaryType: string
    paymentCurrency: string
    language: string
    changeArgs(args: string, e: any): () => void
}

export interface State {
}

export default class RightContainer extends React.Component<Props, State>{
    constructor(args: Props) {
        super(args);
    }

    changeArgs(args: string, e: any) {
        this.props.changeArgs(args, e.target.value);
    }

    render() {
        if (this.props.payload) {
            //render paymentMethod, 
            let method = this.props.payload.orderDetails.payment_method;
            let paymentCurrency = StirngtoArray(this.props.payload.orderDetails.payment_currency.func_desc, "IsOneOf([", "])");
            let paymentCurrencyReact = paymentCurrency.map((item: any, i) => {
                if (item != "IDR") {
                    return <option key={i}>{item}</option>

                }
            })

            //Beneficiary Bank Details
            var beneficiaryBankRequired = [];
            var beneficiaryBankNoRequired = [];
            for (let key in this.props.payload.beneficiaryBank) {
                let payloadKey = this.props.payload.beneficiaryBank[key];

                let name = payloadKey.data.language[this.props.language];
                let desc = payloadKey.data.desc[this.props.language];
                let validation = payloadKey.data.validation[this.props.language];

                //特殊字段处理
                if (this.props.currentCountry == "CN" && key == "beneficiary.bank_details.account_name") {
                    validation = this.props.language == "cn" ? "必须为中文姓名" : "String contains only chinese characters AND account name is the combination of first name and last name in Chinese"
                    desc = this.props.language == "cn" ? "收款客户的开户名" : "Account name of the beneficiary in Chinese"
                }
                if (this.props.currentCountry == "GB" && key == "beneficiary.bank_details.account_number") {
                    validation = this.props.language == "cn" ? "长度为$x并且全部为阿拉伯数字" : "Length is $x-digit and contains digits only"
                }
                if (this.props.currentCountry == "US" && this.props.paymentMethod == "SWIFT" && key == "beneficiary.bank_details.account_routing_type1") {
                    validation = this.props.language == "cn" ? "长度为9并且全部为阿拉伯数字" : "Length is 9-digit and contains digits only"
                    name = this.props.language == "cn" ? "ABA - WIRE TRANSFER" : "ABA - WIRE TRANSFER"
                    desc = this.props.language == "cn" ? "美国FedWire清算网络的9位数字银行识别码" : " A 9-digit bank routing ID for members of FedWire electronic funds transfer system"
                }
                if (this.props.currentCountry == "SG" && key == "beneficiary.bank_details.account_routing_type1") {
                    validation = this.props.language == "cn" ? "长度为7并且全部为阿拉伯数字，格式为AAAABBB，AAAA为Bank Code，BBB为Branch Code" : "Length is 7-digit and contains digits only, format: AAAABBB, AAAA is Bank Code, BBB is Branch Code"
                    name = this.props.language == "cn" ? "BANK CODE" : "BANK CODE"
                    desc = this.props.language == "cn" ? "新加坡本地清算网络的7位数字银行识别码" : "A 7-digit bank routing ID for members of Singapore local clearing system"
                }
                if (validation.indexOf("$x") != -1) {
                    if (payloadKey.validation_functions[0].args.length == 0 && payloadKey.validation_functions.length == 2) {
                        if (payloadKey.validation_functions[1].args.length == 2) {
                            validation = validation.replace('$x', payloadKey.validation_functions[1].args[0]);
                            validation = validation.replace('$y', payloadKey.validation_functions[1].args[1]);
                        } else if (payloadKey.validation_functions[1].args.length == 1) {
                            validation = this.props.language == "cn" ? `长度为${payloadKey.validation_functions[1].args[0]}并且全部为阿拉伯数字` : `Length is ${payloadKey.validation_functions[1].args[0]}-digit and contains digits only`
                        }
                    } else {
                        if (payloadKey.validation_functions[0].args.length == 2) {
                            validation = validation.replace('$x', payloadKey.validation_functions[0].args[0]);
                            validation = validation.replace('$y', payloadKey.validation_functions[0].args[1]);
                        } else if (payloadKey.validation_functions[0].args.length == 1) {
                            validation = this.props.language == "cn" ? `长度为${payloadKey.validation_functions[0].args[0]}并且全部为阿拉伯数字` : `Length is ${payloadKey.validation_functions[1].args[0]}-digit and contains digits only`
                        }
                    }

                };

                if (payloadKey.required) {
                    beneficiaryBankRequired.push({
                        name,
                        desc,
                        validation,
                    });
                } else {
                    beneficiaryBankNoRequired.push({
                        name,
                        desc,
                        validation,
                    })
                }


            }
            beneficiaryBankRequired = beneficiaryBankRequired.map((item, i) => {
                return (
                    <tr key={i}>
                        <td>{item.name}</td>
                        <td>{item.desc}</td>
                        {/* <td>{item.validation}</td> */}
                    </tr>
                )
            })
            beneficiaryBankNoRequired = beneficiaryBankNoRequired.map((item, i) => {
                return <tr key={i}>
                    <td>{item.name}</td>
                    <td>{item.desc}</td>
                    {/* <td>{item.validation}</td> */}
                </tr>
            })
            //beneficiaryDetails
            var beneficiaryDetailsRequired = [];
            var beneficiaryDetailsNoRequired = [];
            for (let key in this.props.payload.beneficiaryDetails) {
                let payloadKey = this.props.payload.beneficiaryDetails[key];
                let validation = payloadKey.data.validation[this.props.language];
                let name = payloadKey.data.language[this.props.language];
                let desc = payloadKey.data.desc[this.props.language];
                //特殊字段处理
                if (this.props.currentCountry == "CN" && key == "beneficiary.additional_info.personal_id_number") {
                    desc = this.props.language == "cn" ? "收款个人证件号码" : "Beneficiary personal ID number"
                }

                if (validation.indexOf("$x") != -1 && payloadKey.validation_functions[0].args.length > 0) {
                    validation = validation.replace('$x', payloadKey.validation_functions[0].args[0]);
                    validation = validation.replace('$y', payloadKey.validation_functions[0].args[1]);
                };
                //去除不必要字段
                if (this.props.BeneficiaryType == "PERSONAL") {
                    //判断翻译的字段最为精准
                    if (this.props.language == "cn") {
                        if (name.indexOf("企业") == -1) {


                            if (payloadKey.required) {
                                beneficiaryDetailsRequired.push({
                                    name: name,
                                    desc: desc,
                                    validation: validation,
                                })
                            } else {
                                beneficiaryDetailsNoRequired.push({
                                    name: name,
                                    desc: desc,
                                    validation: validation,
                                })
                            }
                        };
                    } else {

                        if (name.indexOf("Business") == -1) {
                            if (payloadKey.required) {
                                beneficiaryDetailsRequired.push({
                                    name: name,
                                    desc: desc,
                                    validation: validation,
                                })
                            } else {
                                beneficiaryDetailsNoRequired.push({
                                    name: name,
                                    desc: desc,
                                    validation: validation,
                                })
                            }
                        };
                    }
                } else {
                    if (this.props.language == "cn") {
                        if (name.indexOf("个人") == -1) {
                            if (payloadKey.required) {
                                beneficiaryDetailsRequired.push({
                                    name: name,
                                    desc: desc,
                                    validation: validation,
                                })
                            } else {
                                beneficiaryDetailsNoRequired.push({
                                    name: name,
                                    desc: desc,
                                    validation: validation,
                                })
                            }
                        };
                    } else {

                        if (name.indexOf("Person") == -1) {
                            if (payloadKey.required) {
                                beneficiaryDetailsRequired.push({
                                    name: name,
                                    desc: desc,
                                    validation: validation,
                                })
                            } else {
                                beneficiaryDetailsNoRequired.push({
                                    name: name,
                                    desc: desc,
                                    validation: validation,
                                })
                            }
                        };
                    }
                }
            }
            beneficiaryDetailsRequired = beneficiaryDetailsRequired.map((item, i) => {
                return <tr key={i}>
                    <td>{item.name}</td>
                    <td>{item.desc}</td>
                    {/* <td>{item.validation}</td> */}
                </tr>
            })
            beneficiaryDetailsNoRequired = beneficiaryDetailsNoRequired.map((item, i) => {
                return <tr key={i}>
                    <td>{item.name}</td>
                    <td>{item.desc}</td>
                    {/* <td>{item.validation}</td> */}
                </tr>
            })

            //payerDetails
            var payerDetailsRequired = [];
            var payerDetailsNoRequired = [];
            for (let key in this.props.payload.payerDetails) {
                let payloadKey = this.props.payload.payerDetails[key];
                let validation = payloadKey.data.validation[this.props.language];
                let name = payloadKey.data.language[this.props.language];
                let desc = payloadKey.data.desc[this.props.language];
                if (validation.indexOf("$x") != -1 && payloadKey.validation_functions[0].args.length > 0) {
                    validation = validation.replace('$x', payloadKey.validation_functions[0].args[0]);
                    validation = validation.replace('$y', payloadKey.validation_functions[0].args[1]);
                };

                //去除不必要字段
                if (this.props.payerType == "PERSONAL") {
                    //判断翻译的字段最为精准
                    if (this.props.language == "cn") {
                        if (name.indexOf("企业") == -1) {
                            if (payloadKey.required) {
                                payerDetailsRequired.push({
                                    name,
                                    desc,
                                    validation,
                                })
                            } else {
                                payerDetailsNoRequired.push({
                                    name,
                                    desc,
                                    validation,
                                })
                            }
                        };
                    } else {

                        if (name.indexOf("Business") == -1) {
                            if (payloadKey.required) {
                                payerDetailsRequired.push({
                                    name,
                                    desc,
                                    validation,
                                })
                            } else {
                                payerDetailsNoRequired.push({
                                    name,
                                    desc,
                                    validation: validation,
                                })
                            }
                        };
                    }
                } else {
                    if (this.props.language == "cn") {
                        if (payloadKey.data.language[this.props.language].indexOf("个人") == -1) {
                            if (payloadKey.required) {
                                payerDetailsRequired.push({
                                    name,
                                    desc,
                                    validation,
                                })
                            } else {
                                payerDetailsNoRequired.push({
                                    name,
                                    desc,
                                    validation,
                                })
                            }
                        };
                    } else {

                        if (payloadKey.data.language[this.props.language].indexOf("Person") == -1) {
                            if (payloadKey.required) {
                                payerDetailsRequired.push({
                                    name,
                                    desc,
                                    validation,
                                })
                            } else {
                                payerDetailsNoRequired.push({
                                    name,
                                    desc,
                                    validation,
                                })
                            }
                        };
                    }
                }

            }
            payerDetailsRequired = payerDetailsRequired.map((item, i) => {
                return <tr key={i}>
                    <td>{item.name}</td>
                    <td>{item.desc}</td>
                    {/* <td>{item.validation}</td> */}
                </tr>
            })
            payerDetailsNoRequired = payerDetailsNoRequired.map((item, i) => {
                return <tr key={i}>
                    <td>{item.name}</td>
                    <td>{item.desc}</td>
                    {/* <td>{item.validation}</td> */}
                </tr>
            })

            //paymentDetails
            var paymentDetailsRequired = [];
            var paymentDetailsNoRequired = [];
            for (let key in this.props.payload.paymentDetails) {
                let payloadKey = this.props.payload.paymentDetails[key];
                let validation = payloadKey.data.validation[this.props.language];
                if (this.props.payload.paymentDetails[key].required) {
                    paymentDetailsRequired.push({
                        name: payloadKey.data.language[this.props.language],
                        desc: payloadKey.data.desc[this.props.language],
                        validation: validation,
                    })
                } else {
                    paymentDetailsNoRequired.push({
                        name: payloadKey.data.language[this.props.language],
                        desc: payloadKey.data.desc[this.props.language],
                        validation: validation,
                    })
                }
            }
            paymentDetailsRequired = paymentDetailsRequired.map((item, i) => {
                return <tr key={i}>
                    <td>{item.name}</td>
                    <td>{item.desc}</td>
                    {/* <td>{item.validation}</td> */}
                </tr>
            })
            paymentDetailsNoRequired = paymentDetailsNoRequired.map((item, i) => {
                return <tr key={i}>
                    <td>{item.name}</td>
                    <td>{item.desc}</td>
                    {/* <td>{item.validation}</td> */}
                </tr>
            })



            //reference交易附言
            let reference: any;
            let referenceState = false;
            switch (this.props.paymentCurrency) {
                case "AUD":
                    if (this.props.paymentMethod == "LOCAL" && method.length == 2) {
                        reference = { en: "Maximum 18 characters", cn: "最长18位英文字母或阿拉伯数字组合" }
                    } else {
                        referenceState = true;
                    }
                    break;
                case "CNY":
                    if (this.props.paymentMethod == "LOCAL" && method.length == 2) {
                        reference = { en: "Maximum 60 characters", cn: "最长60位英文字母或阿拉伯数字组合" }
                    } else {
                        referenceState = true;
                    }
                    break;
                case "USD":
                    if (this.props.paymentMethod == "LOCAL" && method.length == 2) {

                        reference = {
                            en: "Maximum 10 characters",
                            cn: "最长10位英文字母或阿拉伯数字组合"
                        }
                    } else {
                        referenceState = true;
                    }
                    break;
                case "CAD":
                    if (this.props.paymentMethod == "LOCAL" && method.length == 2) {
                        reference = {
                            en: "Maximum 30 characters ",
                            cn: "最长30位英文字母或阿拉伯数字组合"

                        }
                    } else {
                        referenceState = true;
                    }
                    break;
                case "GBP":
                    if (this.props.paymentMethod == "LOCAL" && method.length == 2) {
                        reference = {
                            en: "Maximum 16 characters",
                            cn: "最长16位英文字母或阿拉伯数字组合"
                        }
                    } else {
                        referenceState = true;
                    }
                    break;
                case "EUR":
                    if (this.props.paymentMethod == "LOCAL" && method.length == 2) {
                        reference = {
                            en: "Maximum 35 characters",
                            cn: "最长35位英文字母或阿拉伯数字组合"
                        }
                    } else {
                        referenceState = true;
                    }
                    break;

                case "HKD":
                    if (this.props.paymentMethod == "LOCAL" && method.length == 2) {
                        reference = {
                            en: "Maximum 12 characters",
                            cn: "最长12位英文字母或阿拉伯数字组合"
                        }
                    } else {
                        referenceState = true;
                    }
                    break;
                case "SGD":
                    if (this.props.paymentMethod == "LOCAL" && method.length == 2) {
                        reference = {
                            en: "Maximum 16 characters",
                            cn: "最长16位英文字母或阿拉伯数字组合"
                        }
                    } else {
                        referenceState = true;
                    }
                    break;
                default:
                    reference = {
                        en: "Maximum 140 characters (subject to be modified due to requirements of receiving banks, please keep it as brief as possible)",
                        cn: "最长140位英文字母或阿拉伯数字组合（可能会被中间行删改，请尽量保持简短）"
                    }
                    break;
            }
            if (referenceState) {
                reference = {
                    en: "Maximum 140 characters (subject to be modified due to requirements of receiving banks, please keep it as brief as possible)",
                    cn: "最长140位英文字母或阿拉伯数字组合（可能会被中间行删改，请尽量保持简短）"
                }
            }
            //TransactionLimit 交易限额
            let transactionLimit: any;
            let transactionLimitStatus = false;
            switch (this.props.paymentCurrency) {
                case "USD":
                    if (this.props.paymentMethod == "LOCAL" && method.length == 2) {
                        transactionLimit = {
                            en: "75,000 USD",
                            cn: "75,000 USD"
                        }
                    } else {
                        transactionLimitStatus = true
                    }
                    break;
                case "CAD":
                    if (this.props.paymentMethod == "LOCAL" && method.length == 2) {
                        transactionLimit = {
                            en: "20,000 USD",
                            cn: "20,000 USD"
                        }
                    } else {
                        transactionLimitStatus = true
                    }
                    break;
                case "GBP":
                    if (this.props.paymentMethod == "LOCAL" && method.length == 2) {
                        transactionLimit = {
                            en: "250,000 USD per transcation",
                            cn: "每笔25,000 USD"
                        }
                    } else {
                        transactionLimitStatus = true
                    }
                    break;
                default:
                    transactionLimit = {
                        en: "N/A",
                        cn: "N/A"
                    }
                    break;
            }
            if (transactionLimitStatus) {
                transactionLimit = {
                    en: "N/A",
                    cn: "N/A"
                }
            }
            //Supported Bank Channels 支持银行渠道
            let supportedbankchannels: any
            switch (this.props.currentCountry) {
                case "CN":
                    if (this.props.payerType == "PERSONAL" && this.props.BeneficiaryType == "PERSONAL") {
                        supportedbankchannels = {
                            en: "Supported banks",
                            cn: "支持的银行渠道"
                        }
                    } else if (this.props.payerType == "PERSONAL" && this.props.BeneficiaryType == "COMPANY") {
                        supportedbankchannels = {
                            en: "Supported banks",
                            cn: "支持的银行渠道"
                        }
                    } else {
                        supportedbankchannels = {
                            en: "All bank channels",
                            cn: "所有银行渠道"
                        }
                    }
                    break;
                case "IN":
                    supportedbankchannels = {
                        en: "Supported banks",
                        cn: "支持的银行渠道"
                    }
                    break;
                case "PH":
                    supportedbankchannels = {
                        en: "Supported banks",
                        cn: "支持的银行渠道"
                    }
                    break;
                case "MY":
                    supportedbankchannels = {
                        en: "Supported banks",
                        cn: "支持的银行渠道"
                    }
                    break;
                case "TH":
                    supportedbankchannels = {
                        en: "Supported banks",
                        cn: "支持的银行渠道"
                    }
                    break;
                case "VN":
                    supportedbankchannels = {
                        en: "Supported banks",
                        cn: "支持的银行渠道"
                    }
                    break;
                default:
                    supportedbankchannels = {
                        en: "All bank channels",
                        cn: "所有银行渠道"
                    }
                    break;
            }

            var rightContainer = <div >
                <div className="rightTopContainer">
                    <dl className="countryTitle">
                        <dd>
                            <p>{this.props.language == "en" ? "Country Code" : "国家代码"}:<span style={{ paddingLeft: "20px" }}>{this.props.currentCountry}</span></p>
                        </dd>
                    </dl>
                    <div className="modelStyle">
                        <div className="lineBox">
                            <div className="line">
                                <span className="title">{this.props.language == "en" ? "Payer Type" : "付款客户类型"}</span>
                                {this.props.currentCountry == "CN" ? <span>PERSON</span> :
                                    <select value={this.props.payerType} onChange={this.changeArgs.bind(this, "payerType")} >
                                        <option value="PERSONAL">PERSON</option>
                                        <option value="COMPANY">BUSINESS</option>
                                    </select>}

                            </div>
                            <div className="line">
                                <span className="title">{this.props.language == "en" ? "Beneficiary Type" : "收款客户类型"}</span>
                                {this.props.currentCountry == "CN" ? <span>PERSON</span> :
                                    <select value={this.props.BeneficiaryType} onChange={this.changeArgs.bind(this, "BeneficiaryType")} >
                                        <option value="PERSONAL">PERSON</option>
                                        <option value="COMPANY">BUSINESS</option>
                                    </select>
                                }
                            </div>
                            <div className="line">
                                <span className="title">{this.props.language == "en" ? "Currency" : "币种"}</span>
                                {this.props.currentCountry == "CN" ? <span>{this.props.paymentCurrency}</span> :
                                    <select className="selectBG" value={this.props.paymentCurrency} onChange={this.changeArgs.bind(this, "paymentCurrency")} >
                                        {paymentCurrencyReact}
                                    </select>
                                }
                            </div>
                            <div className="line">
                                <span className="title">{this.props.language == "en" ? "Payment Method" : "支付方式"}</span>
                                {this.props.currentCountry == "CN" ? <span>{this.props.paymentMethod}</span> :
                                    (method.length == 2) ?
                                        <select className="selectBG" value={this.props.paymentMethod} onChange={this.changeArgs.bind(this, "paymentMethod")} >
                                            <option value="LOCAL">LOCAL</option>
                                            <option value="SWIFT">SWIFT</option>
                                        </select> : <span className="value">{method[0]}</span>
                                }

                            </div>
                        </div>
                        <div className="lineBox">
                            <div className="line">
                                <span className="title">{this.props.language == "en" ? "Supported Bank Channels" : "银行渠道"}</span>
                                <p>{supportedbankchannels[this.props.language]}</p>
                            </div>
                            <div className="line">
                                <span className="title">{this.props.language == "en" ? "Transaction Limit" : "交易限额"}</span>
                                {(this.props.currentCountry == "CN") ?
                                    <div>
                                        <p>{this.props.language == "cn" ? "每人每笔5,000 USD" : "5,000 USD per transaction per person"}</p>
                                        <p>{this.props.language == "cn" ? "每人每天10,000 USD" : "10,000 USD per day per person"}</p>
                                        <p>{this.props.language == "cn" ? "每人每年50,000 USD" : "50,000 USD per year per person"}</p>
                                    </div> :
                                    <p>{transactionLimit[this.props.language]}</p>}
                            </div>
                            <div className="line">
                                <span className="title">{this.props.language == "en" ? "Reference" : "交易附言"}</span>
                                <p>{reference[this.props.language]}</p>
                            </div>
                        </div>
                    </div>


                </div>
                <div className="infoCode">
                    <div className="bx">
                        <table>
                            <thead>
                                <tr>
                                    <th> {this.props.language == "en" ? "Required Fields" : "必填字段"}</th>
                                    <th> {this.props.language == "en" ? "Description" : "描述"}</th>
                                    {/* <th> {this.props.language == "en" ? "Validation" : "注释"}</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="tableTitle" colSpan={3}> {this.props.language == "en" ? "Beneficiary Bank Details" : " 收款銀行信息"}</td>
                                </tr>
                                {beneficiaryBankRequired}
                                <tr>
                                    <td className="tableTitle" colSpan={3}> {this.props.language == "en" ? "Beneficiary Details" : "收款人信息"}</td>
                                </tr>
                                {beneficiaryDetailsRequired}
                                <tr>
                                    <td className="tableTitle" colSpan={3}> {this.props.language == "en" ? "Payer Details" : "付款人信息"}</td>
                                </tr>
                                {payerDetailsRequired}
                                <tr>
                                    <td className="tableTitle" colSpan={3}> {this.props.language == "en" ? "Payment Details" : "付款信息"}</td>
                                </tr>
                                {paymentDetailsRequired}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        };
        return (
            <div>
                {rightContainer}
            </div>
        )
    }
}