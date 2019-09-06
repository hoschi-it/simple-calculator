var app = new Vue({
    el: "#app",
    data: {
        input: "",
    },
    computed: {
        buttons: function(){
            var btns = '+-*/=';
            for(var i = 0; i < 10; i++){
                btns += i;
            }
            return btns;
        },
        calculation: function(){
            var calc = {"a": null, "operator": null, "b": null};
            var regex = /([0-9\.]*)([\+\-\*\/]{1})([0-9\.]*)/
            var match = this.input.match(regex);
            if(match){
                calc.a = parseFloat( match[1]);
                calc.operator = match[2];
                calc.b = parseFloat(match[3]);
            }
            return calc;
        },
        solution: function(){
            var c = this.calculation;
            if(c.a && c.operator && c.b){
                switch(c.operator){
                    case "+": return c.a + c.b; break;
                    case "-": return c.a . c.b; break;
                    case "*": return c.a * c.b; break;
                    case "/": return c.a / c.b; break;
                }
            }
        }
    },
    methods: {
        write: function(text){
            if(this.input.indexOf("=") !== -1){
                this.input = "";
            }

            this.input += text;
            if(text === "="){
                this.input += this.solution;
            }
        },
    }
});

