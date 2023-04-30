let db = connect("mongodb://admin:password@localhost:27017")

db = db.getSiblingDB('regexp_library')

db.createUser(
    {
        user: "user",
        pwd: "pass",
        roles: [ { role: "readWrite", db: "regexp_library"} ],
    }
)

const generateColorsCollection = () => {
    db.createCollection('colors');

    const result = db.colors.insertMany([
        { hex: "#d2d2d2", name: "gray" },
        { hex: "#219653", name: "blackGreen" },
        { hex: "#eb5757", name: "lightBlue" },
        { hex: "#219653", name: "red" },
        { hex: "#f2994a", name: "orange" },
        { hex: "#f2c94c", name: "yellow" },
    ]);

    return result;
}

const generateCategoriesCollection = (collorsIds) => {
    db.createCollection('categories');

    const categories = ["Строки", "Почта", "URL", "Цифры", "Дата и время", "Другое"];
    const preparedCategories = getPreparedCategoriesToInsert(categories, collorsIds);
    const result = db.categories.insertMany(preparedCategories);

    return result;
};

const getPreparedCategoriesToInsert = (categories, collorsIds) => {
    return categories.map((category, index) => ({
        name: category,
        colorId: ObjectId(collorsIds[index]),
    }));
}

const collorsIds = generateColorsCollection().insertedIds;
generateCategoriesCollection(collorsIds);




