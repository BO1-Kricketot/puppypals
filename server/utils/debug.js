module.exports = {
  logRequest(req) {
    const {query, params, body} = req;
    console.log(`Queries: ${JSON.stringify(query, null, 2)}`);
    console.log(`Params: ${JSON.stringify(params, null, 2)}`);
    console.log(`Body: ${JSON.stringify(body, null, 2)}`);
  },
};
