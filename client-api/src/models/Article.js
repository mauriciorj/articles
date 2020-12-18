export default(sequelize, DataTypes) => {
    const Article = sequelize.define("article", {
        uuid: {
            type: DataTypes.TEXT,
            allowNull: false,
            unique: true,
          },
          source: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          title: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          link: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          filters: {
            type: DataTypes.STRING,
            allowNull: true,
          },
    })

    return Article;
}