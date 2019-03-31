var config = {
    port: process.env.PORT || 3000,
    secrets: {
        jwt: "Banana"
    },
    expireTime: 60 * 24 * 5
    // expires in 5 days
};

module.exports = config;