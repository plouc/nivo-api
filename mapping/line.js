const Joi      = require('joi')
const { Line } = require('nivo')


module.exports = {
    component: Line,
    schema:    Joi.object().keys({
        width:    Joi.number().integer().required(),
        height:   Joi.number().integer().required(),
        identity: Joi.string().required(),
        colors:   Joi.string(),
    }),
    defaults:  {
        data:    [
            {
                "country": "UZ",
                "whisky": 47,
                "rhum": 32,
                "gin": 10,
                "vodka": 25,
                "cognac": 25
            },
            {
                "country": "PE",
                "whisky": 10,
                "rhum": 33,
                "gin": 30,
                "vodka": 29,
                "cognac": 59
            },
            {
                "country": "GI",
                "whisky": 59,
                "rhum": 27,
                "gin": 27,
                "vodka": 27,
                "cognac": 25
            },
            {
                "country": "SY",
                "whisky": 20,
                "rhum": 55,
                "gin": 12,
                "vodka": 10,
                "cognac": 14
            },
            {
                "country": "TO",
                "whisky": 18,
                "rhum": 52,
                "gin": 30,
                "vodka": 24,
                "cognac": 33
            },
            {
                "country": "FO",
                "whisky": 39,
                "rhum": 23,
                "gin": 29,
                "vodka": 10,
                "cognac": 50
            },
            {
                "country": "ZW",
                "whisky": 56,
                "rhum": 39,
                "gin": 51,
                "vodka": 48,
                "cognac": 3
            },
            {
                "country": "BZ",
                "whisky": 45,
                "rhum": 22,
                "gin": 23,
                "vodka": 7,
                "cognac": 33
            },
            {
                "country": "GG",
                "whisky": 4,
                "rhum": 12,
                "gin": 53,
                "vodka": 44,
                "cognac": 50
            },
            {
                "country": "DE",
                "whisky": 39,
                "rhum": 37,
                "gin": 24,
                "vodka": 5,
                "cognac": 44
            },
            {
                "country": "DZ",
                "whisky": 34,
                "rhum": 35,
                "gin": 13,
                "vodka": 45,
                "cognac": 23
            },
            {
                "country": "PT",
                "whisky": 19,
                "rhum": 11,
                "gin": 7,
                "vodka": 26,
                "cognac": 38
            },
            {
                "country": "VG",
                "whisky": 28,
                "rhum": 30,
                "gin": 53,
                "vodka": 8,
                "cognac": 23
            },
            {
                "country": "TK",
                "whisky": 54,
                "rhum": 13,
                "gin": 30,
                "vodka": 15,
                "cognac": 9
            },
            {
                "country": "GM",
                "whisky": 56,
                "rhum": 52,
                "gin": 20,
                "vodka": 39,
                "cognac": 15
            }
        ],
        keys:    ['whisky', 'rhum', 'gin', 'vodka', 'cognac'],
        animate: false,
        margin:  { top: 40, right: 50, bottom: 40, left: 50 }
    },
}
