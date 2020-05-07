# destiny-book.js
命运之书


```js
var dbook = require('destiny-book.js').book
var d =  require('destiny-book.js').DSON
var j = require('destiny-book.js').JVD

var input = {
    name :  'LiSA',
    pwd : 'lxixsxa'
}

dbook({
    name : 'some user login',
    profile : 'xxxxxxxxxxxxx'
})
.mainLine()  //可忽略
.do('用户密码基础校验' , d().test({
    name : '!!&?string&>0',
    pwd : j('!!&?string&>7').$(d().test(data=>{  //do something
        return true
    }))
}, 'xxxxxxxx'))
.if(d('success').test('=false'))
.do('提示登陆失败')
.return()
.endif()
.do('调用登陆接口' , d().rsc('login', { name : d().find('name').first() }))
.if(d('success').test('=false'))
.do('提示用户密码错误')
.return()
.endif()
.do('调转到具体页面', ()=>{ 
    // do someting
})

```