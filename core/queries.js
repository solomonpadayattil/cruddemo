
const Product =require('../models/models')

class Query{
    Query(){
        
    }
    

    findAllByParams(params){
      return new Promise((resolve, reject) => {
              Product
              .find(params)
              .then((doc) => {
                  const obj = {
                      status: 200,
                      message: 'Record fetched successfully!',
                      data: doc
                  }
                  resolve(obj)
              })
              .catch((err) => {
                  const obj = {
                      status: 500,
                      message: err,
                      data: null
                  }
                  resolve(obj)
              });
      });
  }

}

module.exports = {
    QueryClass: Query
}