const portletBOStr = '{"id":"f84bc74d69a81feaf2ee8738b6efc6a2","name":"1693810438885","type":"INDICATOR","displayMode":null,"style":null,"macros":[],"extended":{"asFilter":false,"title":{"text":"图表_1","showTitle":false},"datasetIds":["I8aaa8015017d97839783ea38017d980a686901b2"],"fields":{"cols":[{"id":"AUGMENTED_DATASET_LEVEL.I8aaa8015017d97839783ea38017d980a686901b2.Field-SmartbiDemo-null-PUBLIC-orders-OrderDate-OrderDate_Year-LEVEL-1692006827937","alias":"年","label":"年 (订单日期_时间维度)","label0":"年","showName":null,"aggregatedCalcField":false,"aggregate":null,"originAggregate":null,"orderBy":null,"orderBySettings":null,"align":null,"dataFormat":null,"orderPriority":0,"subtotal":null,"group":"LEVEL","dataType":"STRING","type":"LEVEL_TIME_YEAR","fieldType":"DIMENSION","uniqueId":"15cc9a55dd6fb520238e900e6aa7e49e","parentId":"AUGMENTED_DATASET_FOLDER.I8aaa8015017d97839783ea38017d980a686901b2.HIERARCHY_TIME-1692006827937","parentNodeName":"订单日期_时间维度","order":0,"name":"OrderDate_Year3","fieldLabelStatus":{"aggregate":""}}],"rows":[{"id":"AUGMENTED_DATASET_MEASURE.I8aaa8015017d97839783ea38017d980a686901b2.Field-SmartbiDemo-null-PUBLIC-products-UnitsInStock_1624528620585","alias":"库存","label":"库存","label0":"库存","showName":null,"aggregatedCalcField":false,"aggregate":"SUM","originAggregate":"SUM","orderBy":null,"orderBySettings":null,"align":null,"dataFormat":null,"orderPriority":0,"subtotal":null,"group":"MEASURE","dataType":"INTEGER","type":"MEASURE","fieldType":"MEASURE","uniqueId":"4e4437b212a42a2a8a8f5d645351d1d9","parentId":"AUGMENTED_DATASET_FOLDER.I8aaa8015017d97839783ea38017d980a686901b2.FOLDER_1638934279328","parentNodeName":null,"order":1,"name":"UnitsInStock_1624528620585","fieldLabelStatus":{"aggregate":"SUM"}}],"filters":[],"tooltip":[]},"markFieldGroups":{"GLOBAL_MARK":{"tooltip":[]},"4e4437b212a42a2a8a8f5d645351d1d9":{"tooltip":[]}},"layoutType":"FREE","markFieldGroupsCfg":{"sum":{},"color":{"GLOBAL_MARK":{},"PRIVATE_MARK":{}},"size":{"value":1,"PRIVATE_MARK":{}},"angle":{},"label":{},"tooltip":{},"shape":{"GLOBAL_MARK":{},"PRIVATE_MARK":{}}},"setting":{"portlet":{"title":{"text":"图表_1","show":false},"background":{},"size":{"width":200,"height":70},"position":{"x":351,"y":270}},"advanced":{},"base":{}},"providerName":"AUGMENTED","viewState":{}},"invalidField":null}'

const generateAttrs = function () {
  return {
    portletBO: JSON.parse(portletBOStr),
    slotBO: JSON.parse(portletBOStr),
    portletState: JSON.parse(portletBOStr),
    pageProxy: JSON.parse(portletBOStr)
  }
}

export default {
  generateAttrs
}