


export default {
    //Beneficiary Bank
    "beneficiary.bank_details.bank_country_code": {
        language: {
            en: "Bank Country",
            cn: "银行国家"
        },
        desc: {
            en: "Bank country code (2-letter ISO 3166-2 country code)",
            cn: "收款银行国家代码"
        },
        validation: {
            en: "A supported 2-letter ISO 3166-2 country code",
            cn: "根据ISO 3166-2标准定义的二位国家代码"
        }

    },
    "beneficiary.bank_details.account_currency": {
        language: {
            en: "Account Currency",
            cn: "账户币种"
        },
        desc: {
            en: "Beneficiary account currency (3-letter ISO 4217 code)",
            cn: "收款账户币种代码"
        },
        validation: {
            en: "A supported 3-letter ISO 4217 currency code",
            cn: "根据ISO 4217标准定义的三位字母币种代码"
        }

    },
    "beneficiary.bank_details.iban": {
        language: {
            en: "IBAN",
            cn: "IBAN"
        },
        desc: {
            en: "International bank account number, mostly for european countries",
            cn: "收款客户开户行的IBAN号码"
        },
        validation: {
            en: "Length is up to $x- digit and contains alphanumerics only",
            cn: "最长为34并且为英文字母或阿拉伯数字"
        }

    },
    "beneficiary.bank_details.swift_code": {
        language: {
            en: "SWIFT CODE",
            cn: "SWIFT CODE"
        },
        desc: {
            en: "An 8- or 11-digit bank routing ID for members of the SWIFT network",
            cn: "收款客户开户行的SWIFT号码"
        },
        validation: {
            en: " Length is 8- or 11- digit and contains alphanumerics only",
            cn: "长度为8或11并且为英文字母或阿拉伯数字"
        }

    },
    "beneficiary.bank_details.account_routing_type1": {
        bsb: {
            language: {
                en: "BSB CODE",
                cn: "BSB CODE"
            },
            desc: {
                en: "A 6-digit bank routing ID for members of Australia local clearing system",
                cn: "澳大利亚本地清算网络的6位数字银行识别码"
            },
            validation: {
                en: "Length is 6-digit and contains digits only, format: AABBCC",
                cn: "长度为6并且全部为阿拉伯数字，格式为AABBCC"
            }
        },
        routing_number: {
            language: {
                en: "Routing Number",
                cn: "清算号"
            },
            desc: {
                en: "A 9-digit bank routing ID for members of Canada local clearing system",
                cn: "加拿大本地清算网络的9位数字银行识别码"
            },
            validation: {
                en: "Length is 9-digit and contains digits only, format: 0AAABBBBB, AAA is Financial Institute Number, BBBBB is Transit Number (Branch Code)",
                cn: "长度为9并且全部为阿拉伯数字，格式为0AAABBBBB，AAA为Financial Institute Number，BBBBB为Transit Number (Branch Code) "
            }
        },
        sort_code: {
            language: {
                en: "SORT CODE",
                cn: "SORT CODE"
            },
            desc: {
                en: "A 6-digit bank routing ID for members of UK local clearing system",
                cn: "英国本地清算网络的6位数字银行识别码"
            },
            validation: {
                en: "Length is 6-digit and contains digits only, format: AABBCC",
                cn: "长度为6并且全部为阿拉伯数字，格式为AABBCC"
            }
        },
        bank_code: {
            language: {
                en: "BANK CODE",
                cn: "BANK CODE"
            },
            desc: {
                en: "A 3-digit bank routing ID for members of Hong Kong local clearing system",
                cn: "香港本地清算网络的3位数字银行识别码"
            },
            validation: {
                en: "Length is 3-digit and contains digits only",
                cn: "长度为3并且全部为阿拉伯数字"
            }
        },
        zengin_code: {
            language: {
                en: "ZENGIN CODE",
                cn: "ZENGIN CODE"
            },
            desc: {
                en: "A 7-digit bank routing ID for members of Japan local clearing system",
                cn: "日本本地清算网络的7位数字银行识别码"
            },
            validation: {
                en: "Length is 7-digit and contains digits only, format: AAAABBB, AAAA is Bank Code, BBB is Branch Code",
                cn: "长度为7并且全部为阿拉伯数字，格式为AAAABBB，AAAA为Bank Code，BBB为Branch Code"
            }
        },
        aba: {
            language: {
                en: "ABA - ACH",
                cn: "ABA - ACH"
            },
            desc: {
                en: "A 9- digit bank routing ID for members of ACH",
                cn: "美国ACH清算网络的9位数字银行识别码"
            },
            validation: {
                en: "Length is 9-digit and contains digits only",
                cn: "长度为9并且全部为阿拉伯数字"
            }


        },


    },
    "beneficiary.bank_details.bank_name": {
        language: {
            en: "Bank Name",
            cn: "银行名称"
        },
        desc: {
            en: "Bank name of the beneficiary's bank account",
            cn: "收款客户开户行名称"
        },
        validation: {
            en: "Length is between $x and $y",
            cn: "长度为$x到$y"
        }

    },
    "beneficiary.bank_details.account_number": {
        language: {
            en: "Account Number",
            cn: "银行账号"
        },
        desc: {
            en: "Account number",
            cn: "收款客户银行账号"
        },
        validation: {
            en: "Length is between $x and $y and contains digits only",
            cn: "长度为$x到$y并且全部为阿拉伯数字"
        }

    },
    "beneficiary.bank_details.account_name": {
        language: {
            en: "Account Name",
            cn: "银行账户名"
        },
        desc: {
            en: "Account name of the beneficiary",
            cn: "收款客户的开户名"
        },
        validation: {
            en: "Length is between $x and $y",
            cn: "长度为$x到$y"
        }

    },
    "beneficiary.bank_details.bank_branch": {
        language: {
            en: "Bank Branch",
            cn: "银行分行"
        },
        desc: {
            en: "Specific branch of bank account",
            cn: "收款客户开户行分行名称"
        },
        validation: {
            en: "N/A",
            cn: "N/A"
        }

    },
    "beneficiary.bank_details.bank_street_address": {
        language: {
            en: "Bank Street Address",
            cn: "银行街道地址"
        },
        desc: {
            en: "Bank street address",
            cn: "收款客户开户行地址"
        },
        validation: {
            en: "N/A",
            cn: "N/A"
        }

    },
    "beneficiary.bank_details.binding_mobile_number": {
        language: {
            en: "Binding Mobile Number",
            cn: "账户绑定手机号"
        },
        desc: {
            en: "The mobile number tied to the Beneficiary's bank account",
            cn: "收款客户银行账号绑定手机"
        },
        validation: {
            en: "Length is between $x and $y",
            cn: "长度为$x到$y"
        }

    },
    //Beneficiary Details
    "beneficiary.entity_type": {
        language: {
            en: "Beneficiary Entity Type",
            cn: "收款主体类型"
        },
        desc: {
            en: "Entity type of the beneficiary",
            cn: "收款主体类型"
        },
        validation: {
            en: "Entity type is either of PERSON OR BUSINESS",
            cn: "收款主体类型可以是个人或企业"
        }

    },
    "beneficiary.first_name": {
        language: {
            en: "Beneficiary Person First Name",
            cn: "收款个人姓"
        },
        desc: {
            en: "First name of the beneficiary",
            cn: "收款个人姓"
        },
        validation: {
            en: "Length is between $x and $y",
            cn: "长度为$x到$y"
        }

    },
    "beneficiary.last_name": {
        language: {
            en: "Beneficiary Person Last Name",
            cn: "收款个人名"
        },
        desc: {
            en: "Last name of the beneficiary",
            cn: "收款个人名"
        },
        validation: {
            en: "Length is between $x and $y",
            cn: "长度为$x到$y"
        }

    },
    "beneficiary.date_of_birth": {
        language: {
            en: "Beneficiary Person Date of Birth",
            cn: "收款个人生日"
        },
        desc: {
            en: "Beneficiary date of birth",
            cn: "收款个人生日"
        },
        validation: {
            en: "Older than 18 years old",
            cn: "年龄必须大于18周岁"
        }

    },
    "beneficiary.company_name": {
        language: {
            en: "Beneficiary Business Name",
            cn: "收款企业名称"
        },
        desc: {
            en: "Business name of the beneficiary",
            cn: "收款企业名称"
        },
        validation: {
            en: "Length is between $x and $y",
            cn: "长度为$x到$y"
        }

    },
    "beneficiary.beneficiary_address": {
        language: {
            en: "Beneficiary Address",
            cn: "收款客户地址"
        },
        desc: {
            en: "",
            cn: ""
        },
        validation: {
            en: "",
            cn: ""
        }


    },
    "beneficiary.address.country_code": {
        language: {
            en: "Country",
            cn: "国家"
        },
        desc: {
            en: "Beneficiary's country code (2-letter ISO 3166-2 country code)",
            cn: "收款客户所在国家"
        },
        validation: {
            en: "A supported 2-letter ISO 3166-2 code",
            cn: "根据ISO 3166-2标准定义的二位国家代码"
        }

    },
    "beneficiary.full_address": {
        language: {
            en: "Full Address",
            cn: "详细地址"
        },
        desc: {
            en: "Beneficiary's full address",
            cn: "收款客户详细地址"
        },
        validation: {
            en: "N/A",
            cn: "N/A"
        }

    },
    "beneficiary.address.state": {
        language: {
            en: "State",
            cn: "省/州"
        },
        desc: {
            en: "Beneficiary's state",
            cn: "收款客户所在省/州"
        },
        validation: {
            en: " Length is between $x and $y",
            cn: "长度为$x到$y"
        }

    },
    "beneficiary.address.city": {
        language: {
            en: "City",
            cn: "城市"
        },
        desc: {
            en: "Beneficiary's city",
            cn: "收款客户所在城市"
        },
        validation: {
            en: "Length is between $x and $y",
            cn: "长度为$x到$y"
        }

    },
    "beneficiary.address.street_address": {
        language: {
            en: "Street Address",
            cn: "街道地址"
        },
        desc: {
            en: "Beneficiary's street address",
            cn: "收款客户所在街道地址"
        },
        validation: {
            en: "Length is between $x and $y",
            cn: "长度为$x到$y"
        }

    },
    "beneficiary.address.postcode": {
        language: {
            en: "Postcode",
            cn: "邮编"
        },
        desc: {
            en: "Beneficiary's post code",
            cn: "收款客户所在街道邮编"
        },
        validation: {
            en: "Length is between $x and $y",
            cn: "长度为$x到$y"
        }

    },


    "beneficiary.additional_info.personal_first_name_in_chinese": {
        language: {
            en: "Beneficiary Person First Name in Chinese",
            cn: "收款个人姓（中文）"
        },
        desc: {
            en: "Beneficiary's first name in Chinese",
            cn: "收款个人姓（中文）"
        },
        validation: {
            en: "Length is between $x and $y",
            cn: "长度为$x到$y"
        }

    },
    "beneficiary.additional_info.personal_last_name_in_chinese": {
        language: {
            en: "Beneficiary Person Last Name in Chinese",
            cn: "收款个人名（中文）"
        },
        desc: {
            en: "Beneficiary's last name in Chinese",
            cn: "收款个人名（中文）"
        },
        validation: {
            en: "Length is between $x and $y",
            cn: "长度为$x到$y"
        }

    },
    "beneficiary.additional_info.personal_id_type": {
        language: {
            en: "Beneficiary Person ID Type",
            cn: "收款个人证件类型"
        },
        desc: {
            en: "Chinese National ID",
            cn: "身份证"
        },
        validation: {
            en: "Chinese National ID",
            cn: "中国身份证"
        }

    },
    "beneficiary.additional_info.personal_id_number": {
        language: {
            en: "Beneficiary Person ID Number",
            cn: "收款个人证件号码"
        },
        desc: {
            en: "Beneficiary personal ID type",
            cn: "收款个人证件号码"
        },
        validation: {
            en: "Length is between $x and $y",
            cn: "长度为$x到$y"
        }

    },
    "beneficiary.additional_info.personal_id_expiry_date": {
        language: {
            en: "Beneficiary Person ID Expiry Date",
            cn: "收款个人证件到期日期"
        },
        desc: {
            en: "Beneficiary personal ID expiry date",
            cn: "收款个人证件到期日期"
        },
        validation: {
            en: "Length is between $x and $y",
            cn: "长度为$x到$y"
        }

    },
    "beneficiary.additional_info.personal_mobile_number": {
        language: {
            en: "Beneficiary Person Mobile Number",
            cn: "收款个人手机号码"
        },
        desc: {
            en: "Beneficiary personal mobile number",
            cn: "收款个人手机号码"
        },
        validation: {
            en: "Length is between $x and $y",
            cn: "长度为$x到$y"
        }

    },
    "beneficiary.additional_info.personal_nationality": {
        language: {
            en: "Beneficiary Person Nationality",
            cn: "收款个人国籍"
        },
        desc: {
            en: "Nationality of the beneficiary",
            cn: "收款个人国籍"
        },
        validation: {
            en: "N/A",
            cn: "N/A"
        }

    },
    "beneficiary.additional_info.personal_occupation": {
        language: {
            en: "Beneficiary Person Occupation",
            cn: "收款个人职业"
        },
        desc: {
            en: "Beneficiary's occupation",
            cn: "收款个人职业"
        },
        validation: {
            en: "N/A",
            cn: "N/A"
        }

    },
    "beneficiary.additional_info.personal_email": {
        language: {
            en: "Beneficiary Person Email",
            cn: "收款个人电子邮箱"
        },
        desc: {
            en: "Beneficiary's personal email",
            cn: "收款个人电子邮箱"
        },
        validation: {
            en: "N/A",
            cn: "N/A"
        }

    },
    "beneficiary.additional_info.business_area": {
        language: {
            en: "Beneficiary Business Area",
            cn: "收款企业经营范围"
        },
        desc: {
            en: "Category of business activity",
            cn: "收款企业经营范围"
        },
        validation: {
            en: "N/A",
            cn: "N/A"
        }

    },
    "beneficiary.additional_info.business_registration_number": {
        language: {
            en: "Beneficiary Business Registration Number",
            cn: "收款企业注册号码"
        },
        desc: {
            en: "Business registration number",
            cn: "收款企业注册号码"
        },
        validation: {
            en: "N/A",
            cn: "N/A"
        }

    },
    "beneficiary.additional_info.business_registration_type": {
        language: {
            en: "Beneficiary Business Registration Type",
            cn: "收款企业注册类型"
        },
        desc: {
            en: "Type of business as registered with the local government authority",
            cn: "收款企业注册类型"
        },
        validation: {
            en: "N/A",
            cn: "N/A"
        }

    },
    "beneficiary.additional_info.business_registration_expiry_date": {
        language: {
            en: "Beneficiary Business Registration Expiry Date",
            cn: "收款企业注册号码到期日期"
        },
        desc: {
            en: "Business registration expiry date",
            cn: "收款企业注册号码到期日期"
        },
        validation: {
            en: "N/A",
            cn: "N/A"
        }

    },
    "beneficiary.additional_info.business_phone_number": {
        language: {
            en: "Beneficiary Business Phone Number",
            cn: "收款企业联系电话"
        },
        desc: {
            en: "Business phone number",
            cn: "收款企业联系电话"
        },
        validation: {
            en: "N/A",
            cn: "N/A"
        }

    },
    "beneficiary.additional_info.legal_rep_first_name": {
        language: {
            en: "Beneficiary Business Legal Representative First Name",
            cn: "收款企业法人代表姓"
        },
        desc: {
            en: "Legal representative first name",
            cn: "收款企业法人代表姓"
        },
        validation: {
            en: "N/A",
            cn: "N/A"
        }

    },
    "beneficiary.additional_info.legal_rep_last_name": {
        language: {
            en: "Beneficiary Business Legal Representative Last Name",
            cn: "收款企业法人代表名"
        },
        desc: {
            en: "Legal representative last name",
            cn: "收款企业法人代表名"
        },
        validation: {
            en: "N/A",
            cn: "N/A"
        }

    },
    "beneficiary.additional_info.legal_rep_first_name_in_chinese": {
        language: {
            en: "Beneficiary Business Legal Representative First Name in Chinese",
            cn: "收款企业法人代表姓（中文）"
        },
        desc: {
            en: "Legal representative first name in chinese",
            cn: "收款公司法人代表姓（中文）"
        },
        validation: {
            en: "N/A",
            cn: "N/A"
        }

    },
    "beneficiary.additional_info.legal_rep_last_name_in_chinese": {
        language: {
            en: "Beneficiary Business Legal Representative Last Name in Chinese",
            cn: "收款企业法人代表名（中文）"
        },
        desc: {
            en: "Legal representative last name in chinese",
            cn: "收款公司法人代表名（中文）"
        },
        validation: {
            en: "N/A",
            cn: "N/A"
        }

    },
    "beneficiary.additional_info.legal_rep_id_number": {
        language: {
            en: "Beneficiary Business Legal Representative ID Number",
            cn: "收款企业法人代表证件号码"
        },
        desc: {
            en: "Legal representative ID number",
            cn: "收款公司法人代表证件号码"
        },
        validation: {
            en: "N/A",
            cn: "N/A"
        }

    },
    "beneficiary.additional_info.legal_rep_id_type": {
        language: {
            en: "Beneficiary Business Legal Representative ID Type",
            cn: "收款企业法人代表证件类型"
        },
        desc: {
            en: "Legal representative ID type",
            cn: "收款公司法人代表证件类型"
        },
        validation: {
            en: "N/A",
            cn: "N/A"
        }

    },
    "beneficiary.additional_info.legal_rep_id_expiry_date": {
        language: {
            en: "Beneficiary Business Legal Representative ID Expiry Date",
            cn: "收款企业法人代表证件到期日期"
        },
        desc: {
            en: "Legal representative ID expiry date",
            cn: "收款公司法人代表证件到期日期"
        },
        validation: {
            en: "N/A",
            cn: "N/A"
        }

    },
    "beneficiary.additional_info.legal_rep_date_of_birth": {
        language: {
            en: "Beneficiary Business Legal Representative Date of Birth",
            cn: "收款企业法人代表生日"
        },
        desc: {
            en: "Legal representative date of birth",
            cn: "收款公司法人代表生日"
        },
        validation: {
            en: "N/A",
            cn: "N/A"
        }

    },
    "beneficiary.additional_info.legal_rep_email": {
        language: {
            en: "Beneficiary Business Legal Representative Email",
            cn: "收款企业法人代表电子邮箱"
        },
        desc: {
            en: "Legal representative email",
            cn: "收款公司法人代表电子邮箱"
        },
        validation: {
            en: "N/A",
            cn: "N/A"
        }

    },
    "beneficiary.additional_info.legal_rep_mobile_number": {
        language: {
            en: "Beneficiary Business Legal Representative Mobile Number",
            cn: "收款企业法人代表手机号码"
        },
        desc: {
            en: "Legal representative phone number",
            cn: "收款公司法人代表手机号码"
        },
        validation: {
            en: "N/A",
            cn: "N/A"
        }

    },
    "beneficiary.additional_info.legal_rep_nationality": {
        language: {
            en: "Beneficiary Business Legal Representative Nationality",
            cn: "收款企业法人代表国籍"
        },
        desc: {
            en: "Legal representative nationality",
            cn: "收款公司法人代表国籍"
        },
        validation: {
            en: "N/A",
            cn: "N/A"
        }

    },
    "beneficiary.additional_info.legal_rep_occupation": {
        language: {
            en: "Beneficiary Business Legal Representative Occupation",
            cn: "收款企业法人代表职业"
        },
        desc: {
            en: "Legal representative occupation",
            cn: "收款公司法人代表职业"
        },
        validation: {
            en: "N/A",
            cn: "N/A"
        }

    },
    "beneficiary.additional_info.legal_rep_address": {
        language: {
            en: "Beneficiary Business Legal Representative Address",
            cn: "收款企业法人代表地址"
        },
        desc: {
            en: "N/A",
            cn: "N/A"
        },
        validation: {
            en: "N/A",
            cn: "N/A"
        }

    },
    "country_code": {
        language: {
            en: "",
            cn: ""
        },
        desc: {
            en: "",
            cn: ""
        },
        validation: {
            en: "",
            cn: ""
        }
    },
    "full_address": {
        language: {
            en: "",
            cn: ""
        },
        desc: {
            en: "",
            cn: ""
        },
        validation: {
            en: "",
            cn: ""
        }
    },
    "state": {
        language: {
            en: "",
            cn: ""
        },
        desc: {
            en: "",
            cn: ""
        },
        validation: {
            en: "",
            cn: ""
        }
    },
    "city": {
        language: {
            en: "",
            cn: ""
        },
        desc: {
            en: "",
            cn: ""
        },
        validation: {
            en: "",
            cn: ""
        }
    },
    "street_address": {
        language: {
            en: "",
            cn: ""
        },
        desc: {
            en: "",
            cn: ""
        },
        validation: {
            en: "",
            cn: ""
        }
    },
    "postcode": {
        language: {
            en: "",
            cn: ""
        },
        desc: {
            en: "",
            cn: ""
        },
        validation: {
            en: "",
            cn: ""
        }
    },





    "payer.entity_type": {
        language: {
            en: "Payer Entity Type",
            cn: "付款主体类型"
        },
        desc: {
            en: "Entity type of the payer",
            cn: "付款主体类型"
        },
        validation: {
            en: "Entity type is either of PERSON OR BUSINESS",
            cn: "付款主体类型可以是个人或企业"
        }

    },
    "payer.first_name": {
        language: {
            en: "Payer Person First Name",
            cn: "付款个人姓"
        },
        desc: {
            en: "First name of the payer",
            cn: "付款个人姓"
        },
        validation: {
            en: "Length is between $x and $y",
            cn: "长度为$x到$y"
        }

    },
    "payer.last_name": {
        language: {
            en: "Payer Person Last Name",
            cn: "付款个人名"
        },
        desc: {
            en: "Last name of the payer",
            cn: "付款个人名"
        },
        validation: {
            en: "Length is between $x and $y",
            cn: "长度为$x到$y"
        }

    },
    "payer.date_of_birth": {
        language: {
            en: "Payer Person Date of Birth",
            cn: "付款个人生日"
        },
        desc: {
            en: "Payer date of birth",
            cn: "付款个人生日"
        },
        validation: {
            en: "Date is in ISO8601 format and older than 18 years old",
            cn: "必须年满18周岁"
        }

    },
    "payer.company_name": {
        language: {
            en: "Payer Business Name",
            cn: "付款企业名称"
        },
        desc: {
            en: "Business name of the payer",
            cn: "付款企业名称"
        },
        validation: {
            en: "Length is between $x and $y",
            cn: "长度为$x到$y"
        }

    },
    "payer.payer_address": {
        language: {
            en: "Payer Address",
            cn: "付款客户地址"
        },
        desc: {
            en: "N/A",
            cn: "付款客户地址"
        },
        validation: {
            en: "N/A",
            cn: "N/A"
        }

    },
    "payer.address.country_code": {
        language: {
            en: "Country",
            cn: "国家"
        },
        desc: {
            en: "Payer's country code (2-letter ISO 3166-2 country code)",
            cn: "付款客户所在国家"
        },
        validation: {
            en: "A supported 2-letter ISO 3166-2 code",
            cn: "根据ISO 3166-2标准定义的二位国家代码"
        }

    },
    "payer.address.full_address": {
        language: {
            en: "Full Address",
            cn: "详细地址"
        },
        desc: {
            en: "Payer's full address",
            cn: "付款客户详细地址"
        },
        validation: {
            en: "N/A",
            cn: "N/A"
        }

    },
    "payer.address.state": {
        language: {
            en: "State",
            cn: "省/州"
        },
        desc: {
            en: "Payer's state",
            cn: "付款客户所在省/州"
        },
        validation: {
            en: "Length is between $x and $y",
            cn: "长度为$x到$y"
        }

    },
    "payer.address.city": {
        language: {
            en: "City",
            cn: "城市"
        },
        desc: {
            en: "Payer's city",
            cn: "付款客户所在城市"
        },
        validation: {
            en: "Length is between $x and $y",
            cn: "长度为$x到$y"
        }

    },
    "payer.address.street_address": {
        language: {
            en: "Street Address",
            cn: "街道地址"
        },
        desc: {
            en: "Payer's street address",
            cn: "付款客户所在街道地址"
        },
        validation: {
            en: "Length is between $x and $y",
            cn: "长度为$x到$y"
        }

    },
    "payer.address.postcode": {
        language: {
            en: "Postcode",
            cn: "邮编"
        },
        desc: {
            en: "Payer's post code",
            cn: "付款客户地址邮编"
        },
        validation: {
            en: "Length is between $x and $y",
            cn: "长度为$x到$y"
        }

    },
    "payer.additional_info.personal_first_name_in_chinese": {
        language: {
            en: "Payer Person First Name in Chinese",
            cn: "付款个人姓（中文）"
        },
        desc: {
            en: "Payer's first name in Chinese",
            cn: "付款个人姓（中文）"
        },
        validation: {
            en: "N/A",
            cn: "N/A"
        }

    },
    "payer.additional_info.personal_last_name_in_chinese": {
        language: {
            en: "Payer Person Last Name in Chinese",
            cn: "付款个人名（中文）"
        },
        desc: {
            en: "Payer's last name in Chinese",
            cn: "付款个人名（中文）"
        },
        validation: {
            en: "N/A",
            cn: "N/A"
        }

    },
    "payer.additional_info.personal_id_number": {
        language: {
            en: "Payer Person ID Type",
            cn: "付款个人证件类型"
        },
        desc: {
            en: "Payer's personal ID type",
            cn: "付款个人证件类型"
        },
        validation: {
            en: "N/A",
            cn: "N/A"
        }

    },
    "payer.additional_info.personal_id_type": {
        language: {
            en: "Payer Person ID Number",
            cn: "付款个人证件号码"
        },
        desc: {
            en: "Payer's personal ID number",
            cn: "付款个人证件号码"
        },
        validation: {
            en: "N/A",
            cn: "N/A"
        }

    },
    "payer.additional_info.personal_id_expiry_date": {
        language: {
            en: "Payer Person ID Expiry Date",
            cn: "付款个人证件到期日期"
        },
        desc: {
            en: "Payer's personal ID expiry date",
            cn: "付款个人证件到期日期"
        },
        validation: {
            en: "N/A",
            cn: "N/A"
        }

    },
    "payer.additional_info.personal_mobile_number": {
        language: {
            en: "Payer Person Mobile Number",
            cn: "付款个人手机号码"
        },
        desc: {
            en: "Payer's personal mobile number",
            cn: "付款个人手机号码"
        },
        validation: {
            en: "N/A",
            cn: "N/A"
        }

    },
    "payer.additional_info.personal_nationality": {
        language: {
            en: "Payer Person Nationality",
            cn: "付款个人国籍"
        },
        desc: {
            en: "Nationality of the payer",
            cn: "付款个人国籍"
        },
        validation: {
            en: "N/A",
            cn: "N/A"
        }

    },
    "payer.additional_info.personal_occupation": {
        language: {
            en: "Payer Person Occupation",
            cn: "付款个人职业"
        },
        desc: {
            en: "Payer's occupation",
            cn: "付款个人职业"
        },
        validation: {
            en: "N/A",
            cn: "N/A"
        }

    },
    "payer.additional_info.personal_email": {
        language: {
            en: "Payer Person Email",
            cn: "付款个人电子邮箱"
        },
        desc: {
            en: "Payer's personal email",
            cn: "付款个人电子邮箱"
        },
        validation: {
            en: "N/A",
            cn: "N/A"
        }

    },
    "payer.additional_info.business_area": {
        language: {
            en: "Payer Business Area",
            cn: "付款企业经营范围"
        },
        desc: {
            en: "Category of business activity",
            cn: "付款企业经营范围"
        },
        validation: {
            en: "N/A",
            cn: "N/A"
        }

    },
    "payer.additional_info.business_registration_number": {
        language: {
            en: "Payer Business Registration Number",
            cn: "付款企业注册号码"
        },
        desc: {
            en: "Business registration number",
            cn: "付款企业注册号码"
        },
        validation: {
            en: "Length is between $x and $y",
            cn: "长度为$x到$y"
        }

    },
    "payer.additional_info.business_registration_type": {
        language: {
            en: "Payer Business Registration Type",
            cn: "付款企业注册类型"
        },
        desc: {
            en: "Type of business as registered with the local government authority",
            cn: "付款企业注册类型"
        },
        validation: {
            en: "N/A",
            cn: "N/A"
        }

    },
    "payer.additional_info.business_registration_expiry_date": {
        language: {
            en: "Payer Business Registration Expiry Date",
            cn: "付款企业注册号码到期日期"
        },
        desc: {
            en: "Business registration expiry date",
            cn: "付款企业注册号码到期日期"
        },
        validation: {
            en: "N/A",
            cn: "N/A"
        }

    },
    "payer.additional_info.business_phone_number": {
        language: {
            en: "Payer Business Phone Number",
            cn: "付款企业联系电话"
        },
        desc: {
            en: "Business phone number",
            cn: "付款企业联系电话"
        },
        validation: {
            en: "N/A",
            cn: "N/A"
        }

    },
    "payer.additional_info.legal_rep_first_name": {
        language: {
            en: "Payer Business Legal Representative First Name",
            cn: "付款企业法人代表姓"
        },
        desc: {
            en: "Legal representative first name",
            cn: "付款企业法人代表姓"
        },
        validation: {
            en: "N/A",
            cn: "N/A"
        }

    },
    "payer.additional_info.legal_rep_last_name": {
        language: {
            en: "Payer Business Legal Representative Last Name",
            cn: "付款企业法人代表名"
        },
        desc: {
            en: "Legal representative last name",
            cn: "付款企业法人代表名"
        },
        validation: {
            en: "N/A",
            cn: "N/A"
        }

    },
    "payer.additional_info.legal_rep_first_name_in_chinese": {
        language: {
            en: "Payer Business Legal Representative First Name in Chinese",
            cn: "付款企业法人代表姓（中文）"
        },
        desc: {
            en: "Legal representative first name in chinese",
            cn: "付款企业法人代表姓（中文）"
        },
        validation: {
            en: "N/A",
            cn: "N/A"
        }

    },
    "payer.additional_info.legal_rep_last_name_in_chinese": {
        language: {
            en: "Payer Business Legal Representative Last Name in Chinese",
            cn: "付款企业法人代表名（中文）"
        },
        desc: {
            en: "Legal representative last name in chinese",
            cn: "付款企业法人代表名（中文）"
        },
        validation: {
            en: "N/A",
            cn: "N/A"
        }

    },
    "payer.additional_info.legal_rep_id_number": {
        language: {
            en: "Payer Business Legal Representative ID Number",
            cn: "付款企业法人代表证件号码"
        },
        desc: {
            en: "Legal representative ID number",
            cn: "付款企业法人代表证件号码"
        },
        validation: {
            en: "N/A",
            cn: "N/A"
        }

    },
    "payer.additional_info.legal_rep_id_type": {
        language: {
            en: "Payer Business Legal Representative ID Type",
            cn: "付款企业法人代表证件类型"
        },
        desc: {
            en: "Legal representative ID type",
            cn: "付款企业法人代表证件类型"
        },
        validation: {
            en: "N/A",
            cn: "N/A"
        }

    },
    "payer.additional_info.legal_rep_id_expiry_date": {
        language: {
            en: "Payer Business Legal Representative ID Expiry Date",
            cn: "付款企业法人代表证件到期日期"
        },
        desc: {
            en: "Legal representative ID expiry date",
            cn: "付款企业法人代表证件到期日期"
        },
        validation: {
            en: "N/A",
            cn: "N/A"
        }

    },
    "payer.additional_info.legal_rep_date_of_birth": {
        language: {
            en: "Payer Business Legal Representative Date of Birth",
            cn: "付款企业法人代表生日"
        },
        desc: {
            en: "Legal representative date of birth",
            cn: "付款企业法人代表生日"
        },
        validation: {
            en: "N/A",
            cn: "N/A"
        }

    },
    "payer.additional_info.legal_rep_email": {
        language: {
            en: "Payer Business Legal Representative Email",
            cn: "付款企业法人代表电子邮箱"
        },
        desc: {
            en: "Legal representative email",
            cn: "付款企业法人代表电子邮箱"
        },
        validation: {
            en: "N/A",
            cn: "N/A"
        }

    },
    "payer.additional_info.legal_rep_mobile_number": {
        language: {
            en: "Payer Business Legal Representative Mobile Number",
            cn: "付款企业法人代表手机号码"
        },
        desc: {
            en: "Business phone number",
            cn: "付款企业法人代表手机号码"
        },
        validation: {
            en: "N/A",
            cn: "N/A"
        }

    },
    "payer.additional_info.legal_rep_nationality": {
        language: {
            en: "Payer Business Legal Representative Nationality",
            cn: "付款企业法人代表国籍"
        },
        desc: {
            en: "Legal representative nationality",
            cn: "付款企业法人代表国籍"
        },
        validation: {
            en: "N/A",
            cn: "N/A"
        }

    },
    "payer.additional_info.legal_rep_occupation": {
        language: {
            en: "Payer Business Legal Representative Occupation",
            cn: "付款企业法人代表职业"
        },
        desc: {
            en: "Legal representative occupation",
            cn: "付款企业法人代表职业"
        },
        validation: {
            en: "N/A",
            cn: "N/A"
        }

    },
    "payer.additional_info.legal_rep_address": {
        language: {
            en: "Payer Business Legal Representative Address",
            cn: "付款企业法人代表地址"
        },
        desc: {
            en: "N/A",
            cn: "N/A"
        },
        validation: {
            en: "N/A",
            cn: "N/A"
        }

    },
    "reason": {
        language: {
            en: "Reason",
            cn: "交易用途"
        },
        desc: {
            en: "Purpose of the transaction",
            cn: "交易用途"
        },
        validation: {
            en: "N/A",
            cn: "N/A"
        }

    },
    "reference": {
        language: {
            en: "Reference",
            cn: "交易附言"
        },
        desc: {
            en: "A user specified reference that will be displayed to the beneficiary on the payment transaction with their bank",
            cn: "交易附言"
        },
        validation: {
            en: "N/A",
            cn: "N/A"
        }

    }
}
