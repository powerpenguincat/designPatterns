export interface IOnlineBrokerageService {
    getStockSymbols(): string[];
    getBidPrice(stockSymbol: string): number;
    getAskPrice(stockSymbol: string): number;
    putBuyOrder(stockSymbol: string, shares: number, buyPrice: number): void;
    putSellOrder(stockSymbol: string, shares: number, sellPrice: number): void;
}

export interface IStockAnalysisService {
    getEstimatedValue(stockSymbol: string): number;
}

export class StockAnalysisServiceImpl implements IStockAnalysisService {
    getEstimatedValue(stockSymbol: string): number {
        throw new Error("Method not implemented.");
    }
}

export interface IAutomatedStockTrader {
    executeTrades(): void;
}

export class NewYorkStockExchangeBrokerageServiceImpl implements IOnlineBrokerageService {
    getStockSymbols(): string[] {
        throw new Error("Method not implemented.");
    }
    getBidPrice(stockSymbol: string): number {
        throw new Error("Method not implemented.");
    }
    getAskPrice(stockSymbol: string): number {
        throw new Error("Method not implemented.");
    }
    putBuyOrder(stockSymbol: string, shares: number, buyPrice: number): void {
        throw new Error("Method not implemented.");
    }
    putSellOrder(stockSymbol: string, shares: number, sellPrice: number): void {
        throw new Error("Method not implemented.");
    }
}

export class VerySimpleStockTraderImpl implements IAutomatedStockTrader {
    private analysisService: IStockAnalysisService;
    private brokerageService: IOnlineBrokerageService;

    public constructor(analysisService: IStockAnalysisService, brokerageService: IOnlineBrokerageService) {
        this.analysisService = analysisService;
        this.brokerageService = brokerageService;
    }

    executeTrades = (): void => {

    }
}