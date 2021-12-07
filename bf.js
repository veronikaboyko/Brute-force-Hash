//условимся, что нумерация букв в строке S начинается с 1
let fs = require('fs');
let arg = process.argv;

let S = fs.readFileSync(arg[2], 'utf8');
S.toString();
let n = S.length;

let T = fs.readFileSync(arg[3], 'utf8');
T.toString();
let m = T.length;

let hS = 0, hT = 0;
for (let i = 0; i < m; i++){
	hS += S.charCodeAt(i) * (Math.pow(2, m - i - 1));
	hT += T.charCodeAt(i) * (Math.pow(2, m - i - 1));
}

let i = 1;
while (i <= n - m + 1){
	if (hS == hT){
		let j = 0;
		while (S[i + j - 1] == T[j]){
			j++;
			if (j == m){
				console.log(i);
				break;
			}
		}
	}
	hS = (hS - S.charCodeAt(i - 1)*(Math.pow(2, m - 1))) * 2 + S.charCodeAt(m + i - 1)
	i++;
}