exports.DATABASE_URL = process.env.DATABASE_URL || global.DATABASE_URL || "mongodb+srv://ReactUser123:ReactPw123@react-cap-project-db.ay47g.mongodb.net/react-cap-project-db?retryWrites=true&w=majority";
exports.PORT = process.env.PORT || 4747;
exports.JWT_SECRET = process.env.JWT_SECRET || 'JwtReactCapstone';
exports.JWT_EXPIRY = process.env.JWT_EXPIRY || '7d';

// "mongodb://ReactUser123:ReactPw123@ds259207.mlab.com:59207/react-cap-project-db"
