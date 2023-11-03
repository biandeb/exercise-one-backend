export const getTasks = (req, res) => {
    console.log('Llegaste a la ruta de tareas :D');
    res.status(201).json({
        hola: 'chau'
    })
}