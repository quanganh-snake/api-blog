const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");

const middleware = jsonServer.defaults();

server.use(middleware);
server.use(
	jsonServer.rewriter({
		"/*": "/$1",
	})
);

server.use(router);
server.listen(3004, () => {
	console.log(`JSON-Server running on port ${port}`);
});

// export server
module.exports = server;
