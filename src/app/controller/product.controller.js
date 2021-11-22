const Product = require('../models/product');

const getAll = async (request, response) => {
    const products = await Product.find();
    response.json({
        status : true,
        message : 'Query successfully',
        data : products
    });
}

const getById = async (request, response) => {
    const { id } = request.params;

    const product = await Product.findById(id);

    response.json({
        status : true,
        message : 'Query successfully',
        data : product
    });
}

const add = async (request, response) => {
    const { title, description } = request.body;
    const { filename } = request.file;
    if (title && description) {
        const product = new Product();
        product.title = title;
        product.description = description;
        product.photo = filename;
        await product.save();

        response.json({
            status : true,
            message : 'Product <add> successfully'
        });
    } else {
        response.json({
            status : false,
            message : 'Fields required'
        });
    }
}

const update = async (request, response) => {
    const { id } = request.params;
    const { title, description } = request.body;
    let body;

    if (request.file) {
        const { filename } = request.file;
        body = { title, description, photo : filename };
    } else {
        body = { title, description };
    }

    await Product.findByIdAndUpdate(id, body);

    response.json({
        status : true,
        message : 'Product <update> successfully'
    });
}

const deleted = async (request, response) => {
    const { id } = request.params;

    await Product.findByIdAndDelete(id);

    response.json({
        status : true,
        message : 'Product <deleted> successfully'
    });
}

module.exports = { getAll, getById, add, update, deleted }