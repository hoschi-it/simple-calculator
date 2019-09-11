class Calculator {

    constructor(term){
        this.term = term;
    }

    get solution() {
        // deep copy for security
        var term = JSON.parse(JSON.stringify(this.term));
        var formatter = new TermFormatter(term);
        var formatted = formatter.formatted;
        return "Nice";
    }
}