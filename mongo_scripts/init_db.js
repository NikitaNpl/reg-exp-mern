let db = connect("mongodb://admin:password@localhost:27017")

db = db.getSiblingDB('regexp_library')

db.createUser(
    {
        user: "user",
        pwd: "pass",
        roles: [ { role: "readWrite", db: "regexp_library"} ],
    }
)

db.createCollection('colors');

db.colors.insertOne({
    hex: "d2d2d2",
    name: "gray"
})

db.createCollection('categories')

// db.categories.insertOne({
//     name: "Строки",
//     colorId: db.find()
// })

// const insertData = async () => {
//     const { ops } = await db.colors.insertOne({
//         hex: "#d2d2d2",
//         name: "gray"
//         })
    
//         db.createCollection('categories');
//         db.categories.insertOne({
//         name: "Строки",
//         colorId: ops._id});
// }
// insertData()