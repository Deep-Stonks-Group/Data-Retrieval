const preResponseHook = (req, res, next) => {
    console.log(`Pre response hook hit via path: ${req.path}`);
    next();
};

module.exports = preResponseHook;