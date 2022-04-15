/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
/**
* Time  O(M(4 * 3^{L-1}))
* Space O(n)
*
*/
var findWords = function(board, words) {
  const trie = buildTri(words);
  const ans = [];
  for(const rIdx in board) {
    const row = board[rIdx];
    for(const cIdx in row) {
      const cell= row[cIdx];
      if(trie[cell]) backtrack(ans, board, Number(rIdx), Number(cIdx), trie);
    }
  }
  return ans;
};
function buildTri(words){
    const tempTrie = {};
    for(const word of words) {
    let cur = tempTrie;
    for(const lettr of word) {
      if(!cur[lettr]) cur[lettr] = {};
      cur = cur[lettr];
    }
    cur['fin'] = true;
  }
    return tempTrie;
}
function backtrack(ans, board, r, c, trie, word=[]){
    if(r >= 0 && r < board.length && c >= 0 && c < board[0].length && trie.hasOwnProperty(board[r][c])) {
      const val = board[r][c];
      word.push(val)
      board[r][c] = '';
      backtrack(ans, board, r+1, c, trie[val], word);
      backtrack(ans, board, r-1, c, trie[val], word);
      backtrack(ans, board, r, c+1, trie[val], word);
      backtrack(ans, board, r, c-1, trie[val], word);
      word.pop()
      board[r][c] = val;
    }
    if(trie.hasOwnProperty('fin')) {
        const w = word.join('');
        ans.push(w);
        delete trie['fin'];
    }
  }

  /**
 * *Time: O(N x M)
 * *Space: O(N)
 */

const findWords = (board, words) => {
	const directions = [
		[1, 0],
		[-1, 0],
		[0, 1],
		[0, -1],
	];
	const output = [];
	const root = {};

	const insert = word => {
		let node = root;

		for (const char of word) {
			if (!node[char]) node[char] = {};

			node = node[char];
		}

		node.isEnd = true;
	};

	const traverse = (node, x, y, word) => {
		if (node.isEnd) {
			output.push(word);
			node.isEnd = false; // prevent duplicates
		}

		// out of bounds || char DNE in Trie
		if (x < 0 || x >= board.length) return;
		if (y < 0 || y >= board[0].length) return;
		if (!node[board[x][y]]) return;

		const cv = board[x][y];
		board[x][y] = ''; // mark visited

		directions.forEach(([dx, dy]) => {
			traverse(node[cv], x + dx, y + dy, word + cv);
		});

		// reset board
		board[x][y] = cv;
	};

	// insert words into Trie
	for (const word of words) insert(word);

	// search words
	for (let r = 0; r < board.length; r++) {
		for (let c = 0; c < board[0].length; c++) {
			const cv = board[r][c];

			if (root[cv]) traverse(root, r, c, '');
		}
	}

	return output;
};
