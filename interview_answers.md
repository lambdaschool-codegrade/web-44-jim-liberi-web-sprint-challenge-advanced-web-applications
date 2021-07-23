# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.


1. Explain what a token is used for.
Tokens provide authentication and authorization. After registration, tokens are generated, stored and returned.  A username and password get checked against a Database. If found, then a process and return request ensues. Upon Logot user deletes local token and then the server deletes their token.

2. What steps can you take in your web apps to keep your data secure?
Defend against vulnerabilities by removing any instructions for running code like <script>, <object> or <embed>. Protect source code. Use snippet libraries like ES7 React, Redux, JS Snippets, etc. Install a visitor identification to block malicious traffic from getting to the internal program codes. They’ll bring additional security and keep your code bug free. Keep code DRY. Use comments to code only where necessary. Keep the creation of new components to a minimum. Keep all files relating to any one component in a single folder. 

3. Describe how web servers work.
Servers are responsible for processing and answering incoming requests.  A page on internet can be viewed, when the browser requests it from the web server and the web server responds with that page which is an example of Server Side Rendering. Some web servers will server Web Apps all at once which is called Client Side rendering. 


4. Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
PUT, POST, GET, and DELETE.