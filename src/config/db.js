//DB conection
const mongoose = require('mongoose');
const env = require('dotenv');
env.config();
mongoose.connect(`mongodb+srv://nazeerkhan9695:Nazeer%40123@nazeermongodb.t1zx4xy.mongodb.net/?retryWrites=true&w=majority`)
.then(d=>console.log('Connected'))
.catch(e=>console.log('Error connecting',e));
//2. Named Export
exports.mongoose = mongoose
