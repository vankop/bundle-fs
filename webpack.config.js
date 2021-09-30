module.exports = [
    {
        mode: 'development',
        target: 'web',
        devtool: false,
        output: {
            path: __dirname + '/web'
        },
        resolve: {
            modules: ['modules']
        }
    },
    {
        mode: 'development',
        target: 'node',
        devtool: false,
        output: {
            path: __dirname + '/node'
        },
        resolve: {
            modules: ['modules']
        }
    }
];