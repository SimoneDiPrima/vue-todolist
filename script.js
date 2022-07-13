const root = new Vue({
    el:`#root`,
    data:{
        Items : [
            {
                text:`comprare una ferrari`,
                done: `true`
            },
            {
                text:`diventare un turista per sempre`,
                done: `false`
            },
            {
                text:`la tricolor vinca un mondiale`,
                done: `true`
            },
            {
                text:`comprare uno yatch`,
                done: `false`
            },
            {
                text:`mangiare per un giorno solo crostacei`,
                done: `true`
            }
        ]
    },
    methods:{
        deleteItems(index){
            this.Items.splice(index,1);
        }

    }

})