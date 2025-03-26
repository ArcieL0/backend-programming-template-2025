const { get } = require('mongoose');
const { Books } = require('../../../models');

async function getBooks() {
  return Books.find({});
}

async function create(title) {
  return Books.create({ title });
}

async function getBooks(offset, limit) {
  return booksRepository.getBooks(offset, limit);
}

module.exports = {
  getBooks,
  create,
  getbooks,
};
