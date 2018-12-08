export class Modal {
    
    public data:any;
    private _i:number;

    set(data,_i):any{
        this.data = data;
        let dataObj = {
            "title" : this.data[_i].name.title,
            "first": this.data[_i].name.first,
            "last": this.data[_i].name.last,
            "img": this.data[_i].picture.large,
            "mail":this.data[_i].email,
            "cell":this.data[_i].cell
        }
        return dataObj;
    }
}