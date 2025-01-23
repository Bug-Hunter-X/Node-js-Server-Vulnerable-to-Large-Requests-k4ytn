# Node.js Server Vulnerability: Large Request Handling

This repository demonstrates a common vulnerability in Node.js servers: improper handling of large requests. The `bug.js` file contains a server that's susceptible to crashes or memory exhaustion if it receives a request with a large body.  The `bugSolution.js` provides a corrected implementation.

**Vulnerability:**
The server in `bug.js` appends incoming request data directly to a string variable (`body`). Without a size limit, this can lead to a denial-of-service attack. A large request could consume excessive memory and ultimately cause the server to crash.

**Solution:**
The solution in `bugSolution.js` demonstrates safe handling of large requests by limiting the maximum request size and handling errors gracefully.