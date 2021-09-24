var s = ' ';
var point = 0;
document.getElementById('point').innerHTML = point + '/' + quiz.length;
quiz.forEach( (Q,i) => {
  s += `<h3> ${i+1}. ${Q.q} <br> </h3> <div id = d${i}>`;
  Q.a.forEach( (A,j) => {
    if(Q.ca.length === 1)
      s += `<input type = radio onclick = check_radio(this.value) name=r${i} value='${i},${j}'> <span id=c${i}${j}> ${A} </span> <br> `;
    else if(Q.ca.length > 1)
      s += `<input type = checkbox onclick = check_box(this.value) name=r${i} value='${i},${j}'> <span id=c${i}${j}> ${A} </span> <br> `;
  });
  s += '</div>';
})
document.querySelector('body').innerHTML += s;
function let_dis(dis)
{
  dis.forEach( DIS => {
    DIS.disabled = true;
  })
}
function check_radio(i)
{
  console.log(i);
  var prm = i.split(',');
  var dis = document.querySelectorAll('#d' + prm[0] + ' input');
  let_dis(dis);
  var s = document.querySelectorAll('#d' + prm[0] + ' span');
  s.forEach( (S,i) => {
    if(i == quiz[prm[0]].ca) S.style.color = 'blue';
  })
  if(prm[1] == quiz[prm[0]].ca)
  {
    point++;
    document.getElementById('point').innerHTML = point + '/' + quiz.length;
  }
  else
  {
    document.getElementById('c'+prm[0]+prm[1]).style.color = 'red';
  }
}

function let_blue(s, no_quiz)
{
  s.forEach( (S,v) => {
    for(var j=0;j<quiz[no_quiz].ca.length;j++)
    {
      if(v == quiz[no_quiz].ca[j])
      {
        S.style.color = 'blue';
      }
    }  
    })
}
var check = 0, tmp = 0;
var time_click = [];
function check_box(i)
{ 
  var prm = i.split(',');
  var dis = document.querySelectorAll('#d' + prm[0] + ' input');
  for(var j=0;j<quiz[prm[0]].ca.length;j++)
  {
    if(prm[1] == quiz[prm[0]].ca[j])
    {
      check = 1;
      tmp++;
    }
  }
  if(check === 0)
  {
    let_dis(dis);
  }
  var s = document.querySelectorAll('#d' + prm[0] + ' span');
  if(tmp == quiz[prm[0]].ca.length)
  {
    point++;
    document.getElementById('point').innerHTML = point + '/' + quiz.length;
    let_dis(dis);
    let_blue(s, prm[0]);
    tmp = 0;
  }
  if(check === 0)
  {
    for(var j=0;j<quiz[prm[0]].wa.length;j++)
      document.getElementById('c'+prm[0]+quiz[prm[0]].wa[j]).style.color = 'red';
    let_blue(s, prm[0]);
    tmp = 0;
  }
  check = 0;
}