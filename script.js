let players = [
    'Michael Jordan', 
    'Magic Johnson',
    'Larry Bird',
    'Bill Russell',
    'Wilt Chamberlain'
]

players[5] = 'Kareem Abdul-Jabbar';
players[6] = 'Hakeem Olajuwon';
players[7] = 'Oscar Robertson';
players[8] = 'Isiah Thomas';
players[9] = 'Scottie Pippen';

let text = '';
for(x = 0; x < players.length; x++) {
    text += players[x] + '<br>';
}

document.getElementById("list").innerHTML = text;