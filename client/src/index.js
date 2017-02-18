console.log('index.js:+');

var m = require('mithril');

function getField(field_id) {
  var text = document.getElementById(field_id).value;
  console.log('getField: field_id=' + field_id + ' text=' + text);
  return text;
}

function setField(field_id, result) {
  document.getElementById(field_id).value = result;
  console.log('setField: field_id=' + field_id + ' result=' + result);
}

var body =
  m('div', "Enter Number: ", [
    m('input', {id: "text_input", type: "text", style: "width: 200px;"}),
    m('button', {onclick: () => {
        var r = Number(getField('text_input'));
        r += 1;
        setField('result_output', r);
      }
    }, "Increment"),
    m('input', {id: "result_output", type: "text", style: "width: 200px;"}),
  ]);

m.render(document.body, body);

console.log('index.js:-');
