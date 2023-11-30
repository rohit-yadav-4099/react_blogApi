const route = require("express").Router();

const {dataCategory} = require("../Category/Category");

route.get("/reactblog",dataCategory)

module.exports={
    route
}