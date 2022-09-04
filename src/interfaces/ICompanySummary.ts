

export default interface ICompanySummary{
    company_name: string;
    orders_summary: {
        page: number;
        perPage: number;
        total_records: number;
        all_orders: never[];
    };
    expenses_summary: {
        page: number;
        perPage: number;
        total_records: number;
        all_expenses: never[];
    };
}