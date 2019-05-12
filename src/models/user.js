const user = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        nickName: {
            type: DataTypes.STRING,
        }, 
        gender: {
            type: DataTypes.ENUM('Male', 'Female', 'Other')
        }
    })

    User.associate = models => {
        User.hasMany(models.Posts, { onDelete: 'CASCADE' })
    }

    User.findByLogin = async login => {
        let user = await User.findOne({
            where: { email: login }
        })

        return user
    }

    return User
}

export default user