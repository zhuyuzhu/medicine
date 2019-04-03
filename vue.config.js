const mockData = require("./mock/search.json");

module.exports = {
  //...  
  devServer: {
    port: 8080,
    before(app) {
      app.get("/api/search", (req, res) => {
        res.json(mockData);
      });
    }
  }
}