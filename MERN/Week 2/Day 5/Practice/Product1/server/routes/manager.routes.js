const ManagerController = require("../controllers/product.manager");

module.exports=app=>{
    app.get("/api/manager",ManagerController.findAllManagers);
    app.get("/api/manager/:id",ManagerController.findSingleManager);
    app.post("/api/manager",ManagerController.createNewManger);
    app.put("/api/manager/update/:id",ManagerController.updateExistingManager);
    app.delete("/api/manager/delete/:id",ManagerController.deleteAnExistingManager);

};
