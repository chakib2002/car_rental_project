const express = require('express')
const app = express()
const {Search, Rent} = require('./Api/queries')

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.patch('/search', async(req, res, next)=>{
  await Search()
  .then((data)=>{
    res.status(200).send(data)
  })
  .catch((err)=>{
    throw err
  })
})

app.post('/rent/:id', async (req, res, next)=>{
  const id = req.params.id
  await Rent(req.body.client_first_name,
    req.body.client_last_name,
    req.body.client_phone_number,
    req.body.client_email,
    req.body.id_card_number,
    req.body.pickUp_date,
    req.body.return_date,
    id)
    .then(()=>{res.status(200).send({message :"Demand submitted"})})
    .catch(()=>res.status(500).send({message : "an error has occured, Please make another demand"}))

})

const PORT =3001;
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})