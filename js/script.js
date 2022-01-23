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
        nuovoText: '',
    },
    methods: {
        deleteEvent: function(lista) {
            this.todo.splice(this.lista);
        },

        aggiuntaTodo: function (nuovoText) {
            this.todo.push ({
                text: nuovoText,
                done: 'true',      
            });
            this.nuovoText= ''
        }
    },
});


