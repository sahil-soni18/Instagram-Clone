import express from "express";
import pg from "pg";
import cors from "cors";
import multer from "multer";
import { Buffer } from 'buffer';


const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

const client = new pg.Client({
    "host": "localhost",
    "user": "postgres",
    "database": "InternshipAssessment",
    "password": "myPostgres",
    "port": 5432
});

client.connect();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.get('/', async (req, res) => {
    try {
        // const response = await client.query(`SELECT * FROM posts`);
        // const ParsedResponse = JSON.stringify(response);
        // const imageData = ParsedResponse.img;
        // const base64ImageData = Buffer.from(imageData).toString("base64");
        // const imgUrl = `data:image/png;base64,${base64ImageData}`; // Assuming the image format is PNG

        // const responseObj = {
        //     description: ParsedResponse.description,
        //     imgUrl: imgUrl
        // }
        const responseObj = {
            description: "jdfjdbfjdsbh",
            imgUrl: "src\\assets\\react.svg"
        }

        res.send(responseObj);
        console.log(`responseObj = ${responseObj}`);
    } catch (error) {
        console.error(error);
    }
})


app.post('/Post', upload.single('file'), (req, res) => {
    console.log(req.body.description);
    console.log("Uploaded file:", req.file.originalname); // Log the filename
    console.log("File size:", req.file.size); // Log the file size
    // Process the file and description as needed
     client.query("INSERT INTO posts (  img, description) VALUES ( $1, $2)", [ req.file.originalname, req.body.description], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
        }
    });
    res.send("Posted");
  });
  

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
