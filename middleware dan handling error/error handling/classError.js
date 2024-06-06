class errors extends error{
    constructor(massage,statusCode){
        super(massage)
            this.statusCode=this.statusCode
            this.status=`${this.statusCode}`.startsWith('4')? 'fail':'error';
            this.operationals=true
            errors.captureStackTracks(this,this.construktor)
    }
}