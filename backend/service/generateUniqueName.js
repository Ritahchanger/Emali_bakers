const generateUniqueName = (originalName) =>{

    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9)

    return `${originalName}-${uniqueSuffix}`;

}

module.exports = generateUniqueName;