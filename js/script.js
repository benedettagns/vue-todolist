new Vue({
    el: '#app',
    data: {
        todo: [
            {
                text: 'Fare i compiti',
                done: 'false',
            },
            {
                text: 'Fare la spesa',
                done: 'true',
            },
            {
                text: 'Fare il bucato',
                done: 'false',
            },
        ],
        nuovoText: ''
    },
    methods: {
        deleteEvent: function(index) {
            this.todo.splice(index,1);
        },
        
        aggiuntaTodo: function () {
            this.todo.push ({
                text: this.nuovoText,
                done: 'true',      
            });
            this.nuovoText = ''
        },
        
        invertiDone: function (index){
            this.todo[index].done = !this.todo[index].done
        }
    },
});


