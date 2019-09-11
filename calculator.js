class Calculator {

    constructor(term){
        this.term = term;
    }

    get solution() {
        // deep copy for security
        var term = JSON.parse(JSON.stringify(this.term));
        var formatter = new TermFormatter(term);
        var formatted = formatter.formatted;

        var value;
        var a = formatted[0];
        var b = formatted[2];

        var numberRegex = /[0-9]+/;
        if(numberRegex.test(a) && numberRegex.test(b)){
            switch(formatted[1]){
                case "+": value = a + b; break;
                case "-": value = a - b; break;
                case "*": value = a * b; break;
                case "/": value = a / 1.0 / b; break;
            }
        } else {
            value = "unable to solve"
        }
        return value;
    }
}