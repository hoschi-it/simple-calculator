class TermFormatter {

    constructor(term){
        this.term = term;
        this.calculation = [];
    }

    /**
     * @returns {Array}
     */
    get formatted(){

        var regexNum = /[0-9]+/;

        for(var i = 0; i < this.term.length; i++){
            var item = this.term[i];
            if(item !== "="){
                var isPrevANumber;
                var isThisANumber = regexNum.test(item);
                if(i > 0){
                    // find out whether last thing was a number
                    isPrevANumber = regexNum.test(this.term[i-1]);
                } else {
                    isPrevANumber = false;
                }

                if(isPrevANumber === true && isThisANumber === isPrevANumber){
                    this.calculation[this.calculation.length -1] += item;
                } else {
                    this.calculation.push(item);
                }
            }
        }

        // parse Numbers
        for(var i = 0; i < this.calculation.length; i++){
            var item = this.calculation[i];
            if(regexNum.test(item) === true){
                this.calculation[i] = parseFloat(item);
            }
        }

        return this.calculation;
    }
}