
const patterns = require('./patterns')
const writings = require('./writings')

function render_index(database) {
  database.sort(function (a, b) {
    return a.name.toUpperCase() >= b.name.toUpperCase()
  })
  var index_html = "<div class = \"index\">"
  database.forEach(function (item, index) {
    index_html += "<a href = #" + item.ID + "> " + item.name + "</a> "
  })
  index_html += "</div>"
  return index_html
}

function render_database(database) {
  var htmltoadd = "<div class = \"db\">";
  database.forEach(function (item, index) {
    htmltoadd += "<div class = \"doc\" id = " + item.ID + ">";
    for (var key in item) {
      if ((key != "ID")) {
        if ((key == "image")) {
          if (item[key] != "" && item[key] != []) {
            htmltoadd += "<div class = \"fieldname\">" + key.toUpperCase() + "</div>"
              + "<div class = \"fielddata\"> <img src = " + item[key] + "></div>"
          }
        }
        else {
          if (item[key] != "" && item[key] != []) {
            htmltoadd += "<div class = \"fieldname\">" + key.toUpperCase() + "</div>"
              + "<div class = \"fielddata\">" + item[key] + "</div>"
          }
        }
      }
    }
    htmltoadd += "</div>"
  })
  htmltoadd += "</div>"
  return htmltoadd
}

document.getElementById("patterns_index").innerHTML = render_index(patterns)
document.getElementById("writings_index").innerHTML = render_index(writings)
document.getElementById("patterns_database").innerHTML = render_database(patterns)
document.getElementById("writings_database").innerHTML = render_database(writings)
