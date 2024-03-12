export class Error{
    private error: string;
    // constructor
    constructor(error: string){
        this.error = error
    }

    // methods
    public getError(){
        return this.error
    }

    //get json
    public getJson(){
        return {
            "error": this.error
        }
    }
}