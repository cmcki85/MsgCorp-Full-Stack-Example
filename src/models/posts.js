const posts = (sequelize, DataTypes) => {
    const Posts = sequelize.define('posts', {
        ID: {
            type: DataTypes.INTEGER,
            unique: true,
            allowNull: false,
        },
        postBody: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    })  

    Posts.associate = models => {
        Posts.belongsTo(models.User)
    }

    return Posts
}

export default posts