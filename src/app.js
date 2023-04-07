const express = require("express");
require("./Database/Connections");
const router = require("./Routers/Roots")

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

app.use(router)

app.get("/", async (req, res) => {
  res.send(`<h2>Hi ! I am Akash Maurya and this website is running perfectly.</h2>
  <h3>CRUD OPERTIONS ON API</h3>
<style>
h3{
  text-align: center;
}
table.GeneratedTable {
  width: 100%;
  background-color: #ffffff;
  border-collapse: collapse;
  border-width: 2px;
  border-color: #000000;
  border-style: solid;
  color: #000000;
}

table.GeneratedTable td, table.GeneratedTable th {
  border-width: 2px;
  border-color: #000000;
  border-style: solid;
  padding: 3px;
}

table.GeneratedTable thead {
  background-color: #ff0000;
}
</style>

<!-- HTML Code: Place this code in the document's body (between the 'body' tags) where the table should appear -->
<table class="GeneratedTable">
  <thead>
    <tr>
      <th>URL Roots</th>
      <th>Purpose</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>/insertData</td>
      <td>To Create Data</td>
    </tr>
    <tr>
      <td>/readAll</td>
      <td>To Read All Datas</td>
    </tr>
    <tr>
      <td>/read/:id</td>
      <td>Read Data by Id</td>
    </tr>
    <tr>
      <td>/update/:id</td>
      <td>Update Data by Id</td>
    </tr>
    <tr>
      <td>/deleteOne/:id</td>
      <td>Delete Data by Id</td>
    </tr>
    <tr>
      <td>/TopRunners</td>
      <td>Sorted data by Ranks</td>
    </tr>
  </tbody>
</table>
<h2>Thank for visiting my project.</h2>
`);
});

app.listen(port, () => {
  console.log(`Connection with ${port} is live now.`);
});
