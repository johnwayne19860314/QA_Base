/**
 * Created by Anyi-tech on 2017/10/10.
 */
var m = {}
m.excelNames = ['阳光自营_甘霖-华泰上分-产品责任险',
    '阳光自营_甘霖-华泰江苏分公司-产品责任险',
    '阳光自营_甘霖-永诚财产-团体人身意外伤害保险',
    '阳光自营_罗霄&何志鹏-亚太上分-工程机械险',
    '阳光自营_罗霄&何志鹏-史带上海自贸试验区分公司-高端医疗险',
    '阳光自营_罗霄&何志鹏-太平洋上海分公司-车险交强险',
    '阳光自营_罗霄&何志鹏-太平洋上海分公司-公众责任险',   //-
    '阳光自营_罗霄&何志鹏-太平洋上海分公司-财产一切险',//--
    '阳光自营_罗霄&何志鹏-太平洋上海分公司-商业险',
    '阳光自营_王蓉-太平养老上分-团体意外医疗保险',      //9
    '阳光自营_王蓉-太平养老上海分公司-太平盛世团体重大疾病保险_B款',
    '阳光自营_辛苏娟-太平财产上分-天平GBG高端医疗保险',
    '阳光自营_范成刚-平安上分-团体意外',

]
m.com_prod_map = {
    华泰上分:{
        产品责任险:'HTIC20170926008'
    },
    华泰江苏分公司:{
        产品责任险:'HTIC20170926017'
    },
    永诚财产:{
        团体人身意外伤害保险:'AIC20170926005' //易构纵横（国内自驾游）
    },
    亚太上分:{
        工程机械险:'MINANINS20170926005'
    },
    史带上海自贸试验区分公司:{
        高端医疗险:'STARR20170926005'
    },
    太平洋上海分公司:{
        车险交强险:'CPICPROPERTY20170926014',
        公众责任险:'CPICPROPERTY20170926012',
        商业险:'CPICPROPERTY20170926013',
        财产一切险:'CPICPROPERTY20170926015'
    },
    太平养老上分:{
        团体意外医疗保险:'TAIPING20170926007'
    },
    太平养老上海分公司:{
        太平盛世团体重大疾病保险_B款:'TAIPING20170926008'
    },
    太平财产上分:{
        天平GBG高端医疗保险:'TAIPING20170926005'
    },
    平安上分:{
        团体意外:'PINGANPROPERTY20170926009'
    }
}

m.baseUrl = 'http://127.0.0.1:9022'
//m.baseUrl = 'http://operation2.anyitech.ltd'

m.urls = {
    uploadExcelFile:'/ws_opplatform/policy/importOfflinePolicy',
    getChannelByName:'/ws_opplatform/channel/getChannelByName',
    getProductListByAppId:'/ws_opplatform/product/getProductListByAppId',
    importOffLineData:'/ws_opplatform/policy/importOffLineData',
    getPolicyList:'/ws_opplatform/policy/getPolicyList',
    getAllOrderListNew:'/ws_opplatform/order/getAllOrderListNew',
}

module.exports = exports = m