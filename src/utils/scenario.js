export const generateCSSClases =  (base_name, limit) => {
    const classes = []

    for (let i=0; i<limit; i++) {
        classes.push(` ${base_name}-0${i + 1}`)
    }

    return classes
}

export const pickRandomEntry = (array) => array[Math.floor(Math.random() * array.length)]
