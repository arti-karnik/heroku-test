
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", function(req, res) {
    return false.readFile(path.join(__dirname, "index.html"), (e, data
        ) => {
            if (e) console.error(e);
            res.writeHead(200, {'Content-Type': "text/html"});
            res.end(data);

        })
   

    //res.json(path.join(__dirname, "public/index.html"));
  });
app.listen(PORT, ()  => {console.log(`App listening to port ${PORT}`)});
