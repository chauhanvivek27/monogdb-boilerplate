const bookSchema = {
    bsonType: "object",
    required: ["name", "author"],
    additionalProperties: false,
    properties: {
        _id: {},
        name: {
            bsonType: "string",
            description: "'name' is required and is a string"
        }
    },
    author: {
        bsonType: "string",
        description: "'author' is required and is a string"
    },
    page: {
        bsonType: ["int", "double"]
    }
}
module.exports = bookSchema;