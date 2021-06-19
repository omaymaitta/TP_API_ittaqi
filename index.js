const express= require('express')
const app=express()
app.get('/' , (req, res)=>{
    res.send('test2 ')
})
app.listen(3001, () => console.log('server en cours'))

