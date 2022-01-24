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
        nuovoText: [],
    },
    methods: {
        deleteEvent: function(index) {
            this.todo.splice(index);
        },
        
        aggiuntaTodo: function (nuovoText) {
            this.todo.push ({
                text: '',
                done: 'true',      
            });
            this.nuovoText= ''
        }
    },
});


