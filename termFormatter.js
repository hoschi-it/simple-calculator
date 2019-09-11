class TermFormatter {

    constructor(term){
        this.term = term;
        this.calculation = [];
    }

    /**
     * @returns {Array}
     */
    get formatted(){

        for(var i = 0; i < this.term.length; i++){
            var item = this.term[i];
            if(item !== "="){
                var isPrevANumber;
                var isThisANumber = /[0-9]*/.test(item);
                if(this.calculation.length > 0){
                    // find out whether last thing was a number
                } else {
                    isPrevANumber = false;
                }

                if(isPrevANumber === true && isThisANumber === isPrevANumber){
                    // append in array elem
                } else {
                    this.calculation.push(item);
                }
            }
        }
        return this.calculation;
    }
}