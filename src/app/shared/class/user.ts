export class User {

    public data: any;

    set(data):any {
        this.data = data;
        var item:Object = {
            "first":data.name.first,
            "last":data.name.last,
            "title":data.name.title,
            "email":data.email,
            "cell":data.cell,
            "dob":data.dob,
            "age":data.dob.age,
            "img":data.picture.large,
            "location":data.location
        }
        return item;
    }
}

