var app = new Vue({
	el: '#app',
	data: {
		baseWord: '',
		smWord: '',
		nmWord: '',
		amWord: ''
	},
	methods: {
		softlyMutate: function() {
			this.baseWord = this.baseWord.toLowerCase();
			var firstChar = this.baseWord.charAt(0);
			var secondChar = this.baseWord.charAt(1);
			if (firstChar === 'p' && secondChar !== 'h') {
				this.smWord = this.baseWord.replace('p', 'b');
			} else if (firstChar === 't' && secondChar !== 'h') {
				this.smWord = this.baseWord.replace('t', 'd');
			} else if (firstChar === 'c' && secondChar !== 'h') {
				this.smWord = this.baseWord.replace('c', 'g');
			} else if (firstChar === 'b') {
				this.smWord = this.baseWord.replace('b', 'f');
			} else if (firstChar === 'm' && secondChar !== 'h') {
				this.smWord = this.baseWord.replace('m', 'f');
			} else if (firstChar === 'd' && secondChar !== 'd') {
				this.smWord = this.baseWord.replace('d', 'dd');
			} else if (firstChar === 'l' && secondChar === 'l') {
				this.smWord = this.baseWord.substr(1);
			} else if (firstChar === 'r' && secondChar === 'h') {
				this.smWord = this.baseWord.substr(0, 1) + this.baseWord.substr(2);
			} else if (firstChar === 'g') {
				this.smWord = this.baseWord.substr(1);
			} else {
				this.smWord = "The word " + this.baseWord + " does not mutate softly.";
			}
		},
		nasallyMutate: function() {
			this.baseWord = this.baseWord.toLowerCase();
			var firstChar = this.baseWord.charAt(0);
			var secondChar = this.baseWord.charAt(1);
			if (firstChar === 'p' && secondChar !== 'h') {
				this.nmWord = this.baseWord.replace('p', 'mh');
			} else if (firstChar === 't' && secondChar !== 'h') {
				this.nmWord = this.baseWord.replace('t', 'nh');
			} else if (firstChar === 'c' && secondChar !== 'h') {
				this.nmWord = this.baseWord.replace('c', 'ngh');
			} else if (firstChar === 'b') {
				this.nmWord = this.baseWord.replace('b', 'm');
			} else if (firstChar === 'd' && secondChar !== 'd') {
				this.nmWord = this.baseWord.replace('d', 'n');
			} else if (firstChar === 'g') {
				this.nmWord = this.baseWord.replace('g', 'ng');
			} else {
				this.nmWord = "The word " + this.baseWord + " does not mutate nasally.";
			}
		},
	}
});





