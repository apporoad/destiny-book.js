```js
var dbook = require('destiny-book.js')('profile')
var grandma = dbook.grandma
var cupid = dbook.cupid
var dson = dbook.DSON
var story = dbook.story

var heat = {
    name: '等热饭系统',
    predule: '因为新冠影响，越来越多的同事加入了带饭的行列，如何公平排队？用这个系统来解决吧',
    contents: [{
            chapter: '界面显示',
            lines: [
                '1. <加载> [当前队列]',
                '2. 根据点数和登记时间排序',
                '3. 显示当前队列的以下列[排名，名字，点数，预计热饭时间，登记时间]',
                '4. 显示当前系统时间'
            ]
        },
        {
            chapter: '加入排队操作',
            lines: [ '1. 输入姓名', '2. 随机生成点数', '3. 添加新人的数据', '4. 重新显示' ]
        }, {
            chapter: '放弃排队操作',
            lines: [ '1. 输入姓名', '2. 添加放弃说明', '3. 重新显示' ]
        }
    ]
}

story.load(heat)

mg = grandma('my')
mg.pick(/热饭/g).volume().chapter(dson()).tells().nextLine().nextLine().nextLine().nextLine()

//link with marry.js
cupid.book('hello',()=>{},{ must : ()=>{}})

```