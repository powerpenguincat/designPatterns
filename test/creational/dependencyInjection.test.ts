import { IStockAnalysisService, IOnlineBrokerageService, IAutomatedStockTrader, VerySimpleStockTraderImpl, StockAnalysisServiceImpl, NewYorkStockExchangeBrokerageServiceImpl } from "../../src/designPattern/creational/dependencyInjection";

describe('環境ごとにアルゴリズムをひとつだけ選択、委譲することでドメインはそのままにすることができる', ()=> {
    it('shoud do this thing', () => {
        const analysisService: IStockAnalysisService = new StockAnalysisServiceImpl();
        const brokerageService: IOnlineBrokerageService = new NewYorkStockExchangeBrokerageServiceImpl();

        const stockTrader: IAutomatedStockTrader = new VerySimpleStockTraderImpl(analysisService, brokerageService);
        stockTrader.executeTrades();
    });
});