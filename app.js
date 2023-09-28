//console.log('hello');
const app= Vue.createApp({
    //可在其中设置各种函数和数据根据我们想要的结果
    data(){
        return{
            showBooks:true,
            title:'the final Empire',
            auther:'goodman',
            age:'18'
        }

    },
    methods:{
        toogleHideBooks(){
            console.log('good click')
            this.showBooks=!this.showBooks
        },
        changeTitle(title){
            this.title=title
        },
        handleEvent(e,data){
            console.log(e,e.type)
            if(data)
            {
                console.log(data)
            }
        }
    }
})

app.mount('#app')