console.log('index.js:+');

var m = require('mithril');

function getField(field_id) {
  var text = document.getElementById(field_id).value;
  console.log('getField: field_id=' + field_id + ' text=' + text);
}

var body =
  m('div', "Enter something: ", [
    m('input', {id: "text_input", type: "text", style: "width: 200px;"}),
    m('button', {onclick: () => { getField('text_input');} }, "Do it")
  ]);

m.render(document.body, body);

console.log('index.js:-');
