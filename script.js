function fibonacci(num) {
// your code here
	if(n<=2) return (n-1);
	return fibonacci(n-1)+fibonacci(n-2);
}

module.exports = fibonacci;
