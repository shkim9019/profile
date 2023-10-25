const express = require("express");
const app = express();
// const port = 3000;
const port = 3001;
const cors = require('cors');

//cors 오류 --> 쉽게 말해 도메인,포트,프로토콜 중 하나라도 다른 상태에서 요청하면 막아버리는 것?!
// 모두에게 허용
// app.use(cors());

//특정 도메인에만 허용
app.use(cors({
    origin:"http://localhost:3000",
    credentials:true
}));

app.get("/user/:name", (req, res) => {
    const name = req.params.name.toLowerCase();
    if (name === undefined || name != "john") {
        res.status(400).send("bad request");
        return;
    }

    const userInfo = {
        name: "John Wick",
        age: 40,
        picture:
            "https://img.tvreportcdn.de/cms-content/uploads/2023/03/21/34f6858e-e0aa-4940-9232-d8819a1d6299.jpg",
        bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    };
        res.json(userInfo);
    });

    app.get((req, res) => {
        res.status(404).send("not found");
    });

    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
});