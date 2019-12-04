export default{
    template:`
    <div>
        <h1> Watchers, save and json </h1>
        <h2>{{ counter}}</h2>
        <button @click="counter++">click me</button>
        <button @click="updateImg">update Img</button>
    </div>
    `,
    data(){
        return{
            counter: 0,
            tile: {
                x:0,
                y:0,
                img:'/assert/hero.png'
            }
        }
    },
    watch: {
        counter(val){
            console.log(val)
            localStorage.setItem('counter-value',this.counter)
        },
        tile:{
            deep: true,
            handler(val){
                console.log(val)
                localStorage.setItem('saved-tile', JSON.stringify(this.tile) )
            }

        }
    },
    methods: {
        updateImg(){
            this.tile.img = '/asserts/dirt.png'

        }  
        
    },
    created() {
       let storedCounter = localStorage.getItem('counter-value')
       this.counter = storedCounter

       let savedTile = JSON.parse( localStorage.getItem('saved-tile'))
       console.log(savedTile)
    }
}