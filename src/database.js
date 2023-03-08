import { connect } from "mongoose"; 

(async () => {
    try {
        const db = await connect("mongodb://127.0.0.1:27017/tienda-mongorb");
        console.log("Database Connected to", db.connection.name);
    } catch (error) {
        console.error(error);
    }
})();