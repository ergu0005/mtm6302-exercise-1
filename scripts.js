const emojiList = [
  '8986',
  '9200',
  '128512',
  '128513',
  '9969',
  '8986',
  '128034',
  '128512',
  '128513',
  '9918',
  '9749',
  '127936',
  '128512',
  '128513',
  '127799',
  '127772',
  '127919',
  '128512',
  '128513',
  '9989',
  '127756',
  '127989',
  '128512',
  '128513',
  '10024',
  '11088',
  '9200',
  '128512',
  '128513',
  '9203',
  '127810',
  '127817',
  '127818',
  '127819',
  '127820',
  '127821',
  '127822',
  '127823',
  '127825',
  '127826',
  '127827',
  '127829',
  '127849',
  '127853',
  '127861',
  '127863',
  '127873',
  '127880',
  '127912',
  '127914',
  ];

//I get out div with id of root from html
var container = document.getElementById('root');

//I create ul element
var ul = document.createElement('ul');

//I set attribute of our ul element
ul.setAttribute('class', 'emoji-list');

for (i = 0; i <= emojiList.length - 1; i++) {

  //I create li element
  var li = document.createElement('li');
  //I create p element
  var p = document.createElement('p');
  //I create span element
  var span = document.createElement('span');
  //I create code element
  var code = document.createElement('code');
  //I create br element
  var br = document.createElement('br');

  //Set content of span
  span.innerHTML = '&#' + emojiList[i]+";";
  //Set content of code
  code.innerHTML = emojiList[i];


  p.appendChild(span);
  p.appendChild(br);
  p.appendChild(code);

  li.appendChild(p);
  ul.appendChild(li);
 
}

container.appendChild(ul); // add list to the container.
