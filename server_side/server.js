const express = require('express')
const cors = require('cors')
const app = express()
const {Search, Rent, Models} = require('./Api/queries')

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use(cors({
  origin:"http://localhost:3000",
  methods :["POST","GET","PATCH"],
  credentials : true
}))
app.patch('/search', async(req, res, next)=>{
  await Search(req.body.pickup)
  .then((data)=>{
    res.status(200).send(data)
  })
  .catch((err)=>{
    res.sendStatus(500)
    throw err
  })
})

app.patch('/getMarksImg', async(req, res, next)=>{
  const array = req.body.marks;
  await Models(array)
  .then((data)=>{
    res.status(200).send(data)
  })
  .catch((err)=>{
    res.status(500).send({message: 'Internal Server error'+ err})
  })
})

app.post('/rent/:carId', async (req, res, next)=>{
  const carId = req.params.carId
  await Rent(req.body.client_first_name,
    req.body.client_last_name,
    req.body.client_phone_number,
    req.body.client_email,
    req.body.id_card_number,
    req.body.pickUp_date,
    req.body.return_date,
    carId)
    .then(()=>{res.status(200).send({message :"Demand submitted"})})
    .catch(()=>res.status(500).send({message : "an error has occured, Please make another demand"}))

})

const PORT =3001;
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})