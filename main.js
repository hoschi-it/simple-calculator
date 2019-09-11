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
            return this.input;
        },
        solution: function(){
            var c = this.calculation;
            var calc = new Calculator(c);
            return calc.solution;
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

