const dataMapper = require('../dataMapper');

const typesController = {
  typesList: async (request, response, next) => {
    try {
      const types = await dataMapper.findAllTypes();
      response.render('types', {types});
    } 
    catch (error) {
      console.trace(error);
      next();
    } 
  }
}

export default typesController;