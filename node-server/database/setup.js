const knex = require('./index')
knex.schema
  .createTable('users', (table) => {
    table.increments('id')
    table.string('username').notNullable().unique()
    table.string('password').notNullable()
    table.string('first_name').notNullable()
    table.string('last_name').notNullable()
  })
  .then(() => {
    console.log('Created database tables')
    
  })

  knex.schema.createTable('recipes',(table) =>{
    table.increments('id')
    table.integer('userId')
    table.integer('recipeId')

  })
  .then(() =>{
    console.log('Created database tables')
    process.exit(0)
  })
