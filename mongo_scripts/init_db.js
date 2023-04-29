let db = connect("mongodb://admin:password@localhost:27017")

db = db.getSibilingDB('regexp_library')

// db.createUser(
//     {
//         user: "user",
//         pwd: "pass",
//         roles: [ { role: "readWrite", db: "regexp_library"} ],
//     }
// )

db.createCollections('colors')
db.categories.insertOne({
    hex: "#d2d2d2",
    name: "gray"
    }).then((result) => {
        db.createCollections('categories')
        db.categories.insertOne({
        name: "Строки",
        colorId: result.ops._id
            });
    });

