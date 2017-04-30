import hapi from 'hapi';

// Create a server with a host and port
const server = new hapi.Server();
server.connection({ 
    host: 'localhost', 
    port: 8080 
});

// Add the route
server.route({
    method: 'GET',
    path:'/hello', 
    handler: function (request, reply) {
        return reply('hello world');
    }
});

// Start the server
server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});
