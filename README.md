# Instrucciones
TODO: COMANDOS:

1. npm i
2. npm run start
3. si el comando anterior falla probar con: npm run dev
4. Si es necesario crear la tabla ejecute el siguiente comando: npm run db:migrate
5. Tambien deje un seeder con un usuario creado con el siguiente comando: npm run db:seed

# APIS
TODO: Utilice el metodo REST para las consultas:
1.	http://localhost:9000/api/user/getUsers
    SIN BODY
2.	http://localhost:9000/api/user/getUser/1
    SIN BODY
    EL NUMERO AL FINAL ES EL ID DE CADA USUARIO CREADO
3.	http://localhost:9000/api/user/register
    BODY :
    {
        "name":"jean",
        "second_name":"franco",
        "lastname":"ponte",
        "lastname_mother":"solis",
        "email":"jeanfranco@gmail.com",
        "phone":987456123,
        "birthdate":"2020-11-25"
    }
    CAMPOS OPCIONALES: second_name, lastname_mother

# Graphql
TODO: IMPORTANTE al ejecutar el proyecto utilizar al siguiente ruta para acceder al cliente de apollo server: http://localhost:9000/graphql
TODO: Utilice Graphql para realizar los mismos procedimientos del REST
1. Query para traer todos los usuarios:
    query  {
        users {
            id,
            name,
            second_name,
            lastname,
            lastname_mother,
            email,
            phone,
            birthdate,
            state,
        }
    }
2. Query para traer un usuario dependiendo del id(reemplazar el numero 4 por el id del usuario que desea traer)
    query{
        user(id: 4) {
            id
            name
            second_name
            lastname
            lastname_mother
            email
            birthdate
            phone
            state
            createdAt
            updatedAt
        }
    }
3. Mutacion para crear usuarios reemplazar valores dentro de las comillas dobles, dentro de las llaves colocar los campos que desea que devuelva despues de crear el usuario exitosamente
    mutation {
        createUser(
            name: "Jean",
            second_name: "Franco",
            lastname: "Ponte",
            lastname_mother: "Solis", 
            email: "jeanfranco@gmail.com", 
            birthdate: "2023-08-06", 
            phone: 972354545, 
            state: false
            ) {
            id
            name
            lastname
        }
    }