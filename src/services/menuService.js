const MODEL_PATH = '../models/'
const MenuModel =  require(MODEL_PATH + 'Menu');

const create = async menu => await MenuModel.create(menu);

const get = async id => await MenuModel.findById(id)

const deleteMenu = async id => MenuModel.findByIdAndRemove(id)

const getAll =  async () => await MenuModel.find()


module.exports = {
    create,
    get,
    getAll,
    deleteMenu,
}