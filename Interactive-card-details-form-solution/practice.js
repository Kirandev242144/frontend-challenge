const obj = {

prop1 : 'user1',
prop2 : 'user2'


}

Object.defineProperty(obj,'prop1', {

value : obj.prop1,
writable:true,
configurable:false



})

obj.prop1 = 'user3'

console.log(obj.prop1)