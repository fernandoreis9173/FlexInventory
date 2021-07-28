"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
router.get('/', function (request, response) {
    response.status(200).json({ mesage: '...JESUS É TUDO!!!' });
});
exports.default = router;
