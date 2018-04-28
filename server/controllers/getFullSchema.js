//控制器, 负责业务调度
const request = require('request');

exports.getFullSchema = async (ctx) => {

    // 这样就能只允许 http://localhost:3001 这个域名的请求了
    ctx.set("Access-Control-Allow-Origin", "*");

    var res = await asyncRequest(ctx);
    ctx.body = res;

}





asyncRequest = async (ctx) => {


    let body = ctx.request.body;
    return new Promise((resolve, reject) => {
        request({
            url: "https://developer.airwallex.com/api/v1/payments/schema?full_schema=true",
            method: "POST",
            json: true,
            headers: {
                "content-type": "application/json",
            },
            body: {
                "payment_currency": body.paymentCurrency,
                "payment_method": body.paymentMethod,
                "payer": { "entity_type": body.payerType },
                "source_currency": "AUD",
                "beneficiary": {
                    "entity_type": body.BeneficiaryType,
                    "bank_details": {
                        "bank_country_code": body.countryCode
                    }
                }
            }
        }, function (error, response, body) {
            if (error) {
                return reject("nodeService request error");
            } else {
                return resolve(body);
            }

        });
    })

}