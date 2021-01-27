const buildTable = (data) => {
  var table = document.getElementById("myTable");
  table.innerHTML = "";
  for (var i = 0; i < data.length; i++) {
    var info = `${data[i].info}`;
    var code = `${data[i].code}`;

    let row = `<p class="lead fw-600 mt-5">${info} </p>
            <pre class="language-html">
                <code>
                    ${code}
                </code>
            </pre>`;
    table.innerHTML += row;
  }
  Prism.highlightAll();
};
$("#search-input").on("keyup", (e) => {
  const value = e.target.value;
  let data = searchtable(value, myArray);
  buildTable(data);
});

const searchtable = (value, data) => {
  let filteredData = [];
  for (let i = 0; i < data.length; i++) {
    value = value.toLowerCase();
    let info = data[i].info.toLowerCase();
    if (info.includes(value)) {
      filteredData.push(data[i]);
    }
  }
  return filteredData;
};

buildTable(myArray);
