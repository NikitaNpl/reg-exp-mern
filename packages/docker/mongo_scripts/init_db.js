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

const generateCategoriesCollection = (colorsIds) => {
    db.createCollection('categories');

    const categories = ["Строки", "Почта", "URL", "Цифры", "Дата и время", "Другое"];
    const preparedCategories = getPreparedCategoriesToInsert(categories, colorsIds);
    const result = db.categories.insertMany(preparedCategories);

    return result;
};

const getPreparedCategoriesToInsert = (categories, colorsIds) => {
    return categories.map((category, index) => ({
        name: category,
        colorId: ObjectId(colorsIds[index]),
    }));
}

const colorsIds = generateColorsCollection().insertedIds;
generateCategoriesCollection(colorsIds);

db.createCollection('items')

db.items.insertOne({
    "title": "E-Mail формат",
    "description": "Проверка почты на корректность",
    "pattern": "/^([A-Z|a-z|0-9](\\.|_){0,1})+[A-Z|a-z|0-9]\\@([A-Z|a-z|0-9])+((\\.){0,1}[A-Z|a-z|0-9]){2}\\.[a-z]{2,3}$/gm",
    "placeholder": "my@email.com",
    "rating": {
        likes: 4,
        views: 19
    },
    "categoriesId": db.categories.findOne({name: "Почта"})._id
})

db.items.insertOne({
    "title": "Никнейм",
    "description": "Никнейм состоящий от 3 до 16 символов. Допускаются: буквы (a-zA-z), цифры, дефис и нижнее подчеркивание",
    "pattern": "/^[a-zA-Z0-9_-]{3,16}$/",
    "placeholder": "Nickname_",
    "rating": {
        likes: 5,
        views: 22
    },
    "categoriesId": db.categories.findOne({name: "Строки"})._id
})