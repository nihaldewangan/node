"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mc = require('superagent');
// import bodyParser from 'body-parser';
const mailchimpInstance = 'us1', 
// listUniqueId        = 'b6a82d89f0',
mailchimpApiKey = '576fb4e6dab3fd2010efa5385c92f975-us1';
const app = express_1.default();
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
const port = 3000;
app.get('/', (req, res) => {
    res.send('My first node project');
});
app.post('/pp', (req, res) => {
    // res.send(req.body);
    // const res_c = String(res.status(200))
    console.log(req.body);
    res.jsonp({ status: 200, message: "Suitable Message",
        data: { success: ['List of Successful emails'],
            failure: ['List of Failed emails'] }
    });
});
app.listen(port, () => {
    return console.log(`server is listening on ${port}`);
});
//# sourceMappingURL=app.js.map