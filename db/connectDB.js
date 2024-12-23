import mongoose from 'mongoose';

const connectDB = async(DATABASEURL) =>{
    const DB_OPTIONS={
        dbName:'portFolio',
    }
  const data = await mongoose.connect(DATABASEURL, DB_OPTIONS);
  if(!data){
    console.log("Erroe: DataBase Not connected!!!");
  }else{
    console.log("DataBase connected SuccessFul....!");
  }
}

export default connectDB;