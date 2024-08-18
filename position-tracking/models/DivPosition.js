module.exports = (sequelize, DataTypes) => {
    const DivPosition = sequelize.define('DivPosition', {
        div_id: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            primaryKey: true,
        },
        position: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }, {
        tableName: 'div_positions',
    });

    return DivPosition;
};
