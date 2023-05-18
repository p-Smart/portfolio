const mongoose = require('mongoose')
const { Schema } = mongoose;

const detailConfig = {
    type: String,
    required: true
}

const PortfoliosModel = new Schema({
    url: detailConfig,
    image: detailConfig,
    title: detailConfig,
    descp: detailConfig,
    github: detailConfig
  })

const Portfolios = mongoose.models.Portfolios ||  mongoose.model('Portfolios', PortfoliosModel)

export default Portfolios