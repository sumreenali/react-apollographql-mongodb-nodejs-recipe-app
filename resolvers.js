const jwt = require('jsonwebtoken')
require('dotenv').config({path: 'variables.env'});

const createToken = (user, secret, expiresIn) => {
    const {username, email} = user
    const token = jwt.sign({username, email}, secret, {expiresIn})
    return(token)
}


exports.resolvers={

    Query:{
        getAllRecipes: async (root, args, {Recipe}) => {
            const allRecipes = await Recipe.find();
            return allRecipes;
        }
    },

    Mutation:{
        addRecipe: async(root, {name, category, description, instructions, username}, {Recipe}) =>{
            const newRecipe = await new Recipe({
                name,
                description,
                category,
                instructions,
                username
            }).save()
            return newRecipe
        },

        signupUser: async ( root, {username, email, password}, {User}) =>{
            const user = await User.findOne({username})
          if(user){
              throw new Error('Seems like this user already have an account try sign in!')
          }
          const newUser = await new User({
              username,
              email,
              password,
          }).save()
          return { token:createToken(newUser, process.env.SECRET, "1hr")}
        }
    }
}