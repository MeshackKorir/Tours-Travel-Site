// import * as dotenv from 'dotenv'
// dotenv.config()

// export const dbConfig={
//     user: process.env.DB_USER as string,
//     password: process.env.DB_PWD as string,
//     database: process.env.DB_NAME as string,
//     server: process.env.DB_SERVER as string,
//     pool: {
//       max: 10,
//       min: 0, 
//       idleTimeoutMillis: 30000,
      
//     },
//     options: {
//       encrypt: false, 
//       trustServerCertificate: true
//     }


//     }

// console.log(dbConfig);

export const sqlConfig = {
  user: 'sa',
  password: '09909090Mkk',
  database: 'Xplora',
  server:'DESKTOP-B56002J\\KIMWETICHKKORIR',

  pool: {
    max: 10,
    min: 0, 
    idleTimeoutMillis: 30000,
    
  },
  options: {
    encrypt: false, 
    trustServerCertificate: true
  }


}

console.log(sqlConfig);



const testConnection = () => {
  if(sqlConfig){
    console.log('Database connected successfully');
    
  }else{
    console.log('DB NOT CONNECTED');
    
  }
}

testConnection()

// console.log(sqlConfig)




