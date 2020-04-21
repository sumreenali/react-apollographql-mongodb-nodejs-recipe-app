import {gql} from 'apollo-boost'

export const GEL_ALL_RECIPES = gql`
   query{
       getAllRecipes{
          name
          category
          description
          instructions
          likes
          username
       }
   }
`
