const DB = require ('../Database_config/DB')



const Search = async()=>{
  try {
    const result = await DB.query('START TRANSACTION; UPDATE cars SET rent_id = ?, pickUp_date = ?, return_date = ? WHERE return_date <= now() ; SELECT id, models_model, car_name, engine, power, price, image_path FROM cars  WHERE rent_id is ? ; COMMIT ;' ,[null, null, null, null])
    return result[2]
    
  } catch (error) {
    throw error
  }
}

const Rent = async(client_first_name, client_last_name, client_phone_number, client_email, id_card_number,pickUp_date, return_date,car_id)=>{
  try {
    await DB.query("START TRANSACTION; SELECT @id := MAX(id) FROM rent ; INSERT INTO rent(id, client_first_name, client_last_name, client_phone_number, client_email, id_card_number) VALUES(@id+1, ?, ?, ?, ?, ?) ; UPDATE cars SET rent_id = @id+1, pickUp_date= ? , return_date= ?  WHERE id = ? ; COMMIT ; ",
                                                                                            [client_first_name, client_last_name, client_phone_number, client_email, id_card_number,pickUp_date, return_date, car_id])   
  } catch (error) {
    throw error
  }
}





module.exports={Search, Rent}