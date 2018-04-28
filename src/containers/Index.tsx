import * as actions from "../actions/index"
import * as React from "react"
import { Store } from "../types/index"
import { connect, Dispatch } from "react-redux"
import "../css/index.css"
import RightContainer from "./RightContainer"
import { StirngtoArray } from "../utils/utils"


export function mapStateToProps({ demo: { languageName, payload, countryCode, loadingState } }: Store) {

    return {
        name: languageName,
        countryCode: countryCode,
        loadingState: loadingState,
        payload: payload
    };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.FullSchema>) {
    return {
        getFullSchema: (args: any) => dispatch(actions.getFullSchema(dispatch, args))
    }
}
export interface Props {
    name: string;
    countryCode?: any;
    payload?: any;
    getFullSchema?: (args: any) => void;
    loadingState?: boolean;
}
export interface State {
    language: string
    currentCountry: string
    localCurrency: string,
    payerType: string,
    isPDFState: boolean
    BeneficiaryType: string
    paymentMethod: string,
    paymentCurrency: string
}

class Index extends React.Component<Props, State>{

    constructor(args: Props) {
        super(args)
        this.state = {
            // au
            language: "cn",
            isPDFState: false,
            currentCountry: "AU",
            localCurrency: "AUD",
            payerType: "PERSONAL",
            BeneficiaryType: "PERSONAL",
            paymentMethod: "LOCAL",
            paymentCurrency: "AUD"
        }
    }
    componentDidMount() {
        this.props.getFullSchema({
            countryCode: this.state.currentCountry,
            localCurrency: this.state.localCurrency,
            payerType: this.state.payerType,
            BeneficiaryType: this.state.BeneficiaryType,
            paymentMethod: this.state.paymentMethod,
            paymentCurrency: this.state.paymentCurrency
        });
    }

    changeArgs(args: string, value: any) {
        switch (args) {
            case "payerType":
                this.setState({
                    payerType: value
                })
                this.props.getFullSchema({
                    countryCode: this.state.currentCountry,
                    localCurrency: this.state.localCurrency,
                    payerType: value,
                    BeneficiaryType: this.state.BeneficiaryType,
                    paymentMethod: this.state.paymentMethod,
                    paymentCurrency: this.state.paymentCurrency
                });
                break;
            case "BeneficiaryType":
                this.setState({
                    BeneficiaryType: value
                })
                this.props.getFullSchema({
                    countryCode: this.state.currentCountry,
                    localCurrency: this.state.localCurrency,
                    payerType: this.state.payerType,
                    BeneficiaryType: value,
                    paymentMethod: this.state.paymentMethod,
                    paymentCurrency: this.state.paymentCurrency
                });
                break;
            case "paymentCurrency":
                this.setState({
                    paymentCurrency: value
                })
                this.props.getFullSchema({
                    countryCode: this.state.currentCountry,
                    localCurrency: this.state.localCurrency,
                    payerType: this.state.payerType,
                    BeneficiaryType: this.state.BeneficiaryType,
                    paymentMethod: this.state.paymentMethod,
                    paymentCurrency: value
                });
                break;
            case "paymentMethod":
                this.setState({
                    paymentMethod: value
                })
                this.props.getFullSchema({
                    countryCode: this.state.currentCountry,
                    localCurrency: this.state.localCurrency,
                    payerType: this.state.payerType,
                    BeneficiaryType: this.state.BeneficiaryType,
                    paymentMethod: value,
                    paymentCurrency: this.state.paymentCurrency
                });
                break;

        }

    }
    downLoadPDF() {
        this.setState({
            isPDFState: true
        })
        setTimeout(() => {
            let r = confirm(this.state.language == "cn" ? "是否确定下载PDF?" : "Confirm to download PDF?");
            if (r == true) {
                eval("downLoadPDF()");
            }
            this.setState({
                isPDFState: false
            })
        }, 500)




    }
    changeLanguage() {
        if (this.state.language == "cn") {
            this.setState({
                language: "en"
            })
        } else {
            this.setState({
                language: "cn"
            })
        }
    }

    componentWillReceiveProps(nextProps: any) {
        //判断当重新render时返回的数据中的method和当前的不一致, 则立刻改变,重新发出请求
        let method = nextProps.payload.orderDetails.payment_method;
        if (method.length == 1 && this.state.paymentMethod != method[0]) {
            this.setState({
                paymentMethod: method[0]
            })
            this.props.getFullSchema({
                countryCode: this.state.currentCountry,
                localCurrency: this.state.localCurrency,
                payerType: this.state.payerType,
                BeneficiaryType: this.state.BeneficiaryType,
                paymentMethod: method[0],
                paymentCurrency: this.state.paymentCurrency
            });
        };
    }

    changeCountry(event: any) {
        if (event.target.getAttribute("attr-country")) {
            var countryCode = event.target.getAttribute("attr-country")

            for (let country in this.props.countryCode) {
                if (country == countryCode) {
                    this.setState({
                        currentCountry: countryCode,
                        localCurrency: this.props.countryCode[country].localCurrency,
                        paymentMethod: "LOCAL",
                        payerType: "PERSONAL",
                        BeneficiaryType: "PERSONAL",
                        paymentCurrency: this.props.countryCode[country].localCurrency
                    })
                    this.props.getFullSchema({
                        countryCode,
                        localCurrency: this.props.countryCode[country].localCurrency,
                        payerType: "PERSONAL",
                        BeneficiaryType: "PERSONAL",
                        paymentMethod: "LOCAL",
                        paymentCurrency: this.props.countryCode[country].localCurrency
                    });
                };
            };
        };
    }

    render() {
        if (this.props.payload) {
            let countryArr = StirngtoArray(this.props.payload.beneficiaryBank["beneficiary.bank_details.bank_country_code"].func_desc, "IsOneOf([", "])");

            var countary = countryArr.map((country: any, i: number) => {
                let countryitem = this.props.countryCode[country];
                if (countryitem) {
                    return <li key={i} attr-country={country}  >
                        <div attr-country={country} className={this.state.currentCountry == country ? "hover" : ""} >
                            {countryitem.countryName[this.state.language]}
                        </div>
                    </li>
                }

            })
        }
        return (
            <article className="container" >
                <header >
                    <h1>  {this.state.language == "cn" ? "支付指南" : "Country Payout Guide"}</h1>
                    <div className="topRight">
                        <span onClick={this.downLoadPDF.bind(this)} className="downloadPDF">Print</span>
                        <span onClick={this.changeLanguage.bind(this)} className="language">{this.state.language == "cn" ? "CN" : "EN"}</span>

                    </div>
                </header>
                <article className="mainContainer"  >
                    <div style={this.state.isPDFState == false ? { display: "block" } : { display: "none" }} className="leftContaier" >
                        <div className="countryList">
                            <ul onClick={this.changeCountry.bind(this)} >
                                {(countary) && countary}
                            </ul>
                        </div>
                    </div>
                    <div className={this.state.isPDFState == false ? "rightContainer" : "rightContainer rePDF"} >
                        <RightContainer
                            payload={this.props.payload}
                            currentCountry={this.state.currentCountry}
                            localCurrency={this.state.localCurrency}
                            changeArgs={this.changeArgs.bind(this)}
                            payerType={this.state.payerType}
                            BeneficiaryType={this.state.BeneficiaryType}
                            paymentMethod={this.state.paymentMethod}
                            paymentCurrency={this.state.paymentCurrency}
                            language={this.state.language}
                        />
                    </div>
                </article>
                <article className="bgloading" style={this.props.loadingState ? { display: "block" } : { display: "none" }}  >
                </article>


            </article>
        )
    }
}





function mergeProps(stateProps: Object, dispatchProps: Object, ownProps: Object) {
    return Object.assign({}, ownProps, stateProps, dispatchProps);
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Index);
