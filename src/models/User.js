import { Sequelize, DataTypes } from 'sequelize';
const sequelize = new Sequelize("postgres://wuwsymwj:PgCRcWYkcQanX2MBBF0DXmIvNkgaRHnk@snuffleupagus.db.elephantsql.com/wuwsymwj")

const User = sequelize.define('User', {
   id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'First name is required.',
        }
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Last name is required.',
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          args: true,
          msg: 'Email address is invalid.'
        },
        notNull: {
          args: true,
          msg: 'Email address cannot be empty.'
        },
       
      },
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false  
   },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Password is required.',
        },
        len: {
          args: [6, 150],
          msg: 'Password must be more than 5 characters'
        }
      }
    }
});

sequelize.sync()


export default User;
