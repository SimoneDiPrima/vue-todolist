const root = new Vue({
    el:`#root`,
    data:{
        newItems :``,
        Items : [
            {
                text:`comprare una ferrari`,
                done: `false`
            },
            {
                text:`d̵i̵v̵e̵n̵t̵a̵r̵e̵ ̵u̵n̵ ̵t̵u̵r̵i̵s̵t̵a̵ ̵p̵e̵r̵ ̵s̵e̵m̵p̵r̵e̵`,
                done: `true`
            },
            {
                text:`la tricolor vinca un mondiale`,
                done: `false`
            },
            {
                text:`comprare uno yatch`,
                done: `false`
            },
            {
                text:`m̵a̵n̵g̵i̵a̵r̵e̵ ̵p̵e̵r̵ ̵u̵n̵ ̵g̵i̵o̵r̵n̵o̵ ̵i̵n̵t̵e̵r̵o̵ ̵c̵r̵o̵s̵t̵a̵c̵e̵i̵`,
                done: `true`
            }
        ]
    },
    methods:{
        deleteItems(index){
            this.Items.splice(index,1);
        },
        addItems(){
           let addedItems = {text: this.newItems ,done : false}
            this.Items.push(addedItems);
            this.newItems = ``;
        }
    }

})