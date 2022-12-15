const express=require('express')

const app=express()

const cards=[
    {cardNumber:12345678,id:1},
    {cardNumber:87654321,id:2},
    {cardNumber:65498753,id:3},
    {cardNumber:24389056,id:4},
    {cardNumber:42986323,id:5}
];

app.get('/cards/',function(req,res){
    res.json(cards)
})

app.get('/cards/:id', function(req,res){
   const card=cards.find((card)=>card.id==req.params.id)
if(!card){
    res.status(404).send()
}
res.status(200).json(card)
})

//Market products:

const products=[
    {id:1,name:'banana',amount:12,price:2},
    {id:2,name:'mango',amount:5,price:5},
    {id:3,name:'kiwi',amount:13,price:3},
    {id:4,name:'melon',amount:6,price:6},
    {id:5,name:'watermelon',amount:8,price:3},
    {id:6,name:'orange',amount:22,price:3},
    {id:7,name:'pomegranate',amount:33,price:2},
    {id:8,name:'apple',amount:50,price:1},
    {id:9,name:'lemon',amount:15,price:2},
    {id:10,name:'avacado',amount:7,price:4},
]

app.get('/products/', function(req,res){
    res.json(products)
})

app.get('/products/:id',function(req,res){
    const product=products.find((product)=>product.id==req.params.id)
    if(!product){
        res.status(404).send()
    }
    res.status(200).json(product)
})

app.get('/products/amount',function(req,res){
    const count=parseInt(req.query.count)
    const offset=parseInt(req.query.offset)
    res.send({products:products.slice(offset,offset+count)})
})

app.listen(3000, function(){
    console.log('Project is executed')
})