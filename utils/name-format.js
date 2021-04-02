const nameFormat = name => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

module.exports = nameFormat;