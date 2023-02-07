const combineClassName = (styles: any) => {
    // receive the styles, and return the function which receives the array of classNames
    // and return the className with the styles.
    // with the className which does not exist in the styles, it will return the className directly.
    return (...classNames: string[]) => {
        return classNames.map(className => {
            if (styles[className]) {
                return styles[className]
            }
            return className
        }).join(' ')
    }
}


export {
    combineClassName,
}
