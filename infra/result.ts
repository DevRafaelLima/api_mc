export class Result<T> {
    Qtd: number;
    Page: number;
    Total: number;
    Data: Array<T>;

    constructor(qtd: number, page: number, total: number,  data: any) {
        this.Qtd = qtd;
        this.Page = page;
        this.Total = total;
        this.Data = data;
    }
}