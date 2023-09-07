function fibonacci(num) {
// your code here
	if(n<=2) return (n-1);
	return fibonacci(n)+fibonacci(n-1);
}

module.exports = fibonacci;
