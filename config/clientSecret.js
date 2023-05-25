const { private_key } = process.env;

const generateClientSecret = (client_email) => {
  return JSON.parse(
    JSON.stringify({
      credentials: {
        client_email,
        private_key:
          '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCqooadcU1pfyPq\nOTdYZLgGD7EA+3qcpqivsgxu8PfHweKqRaOoa3MNnBLc1hgVmxb/Dbjd/liNRAUr\n9nuSqHjWk0Nx6NbrCb46wIMPQsQP5IrPcNRPLuPV1thytIC0NVEMh9ojKX1ITOCX\nPxEWFKFiLsHLMrZMn4ZUsjPxt/EXDoHO5QA96iPmC5rxBx8ZpAfOujNK62cft2ti\nIAQpq5lNpjZ8Gk7PkFvDRwPGtI8JhPUBIqTIq9U1Eo5dZeTdINMiGSPj1OWVG2zy\nNd2JcWWRwSOoaRkaTjxf6xQbUP14QnEBJ9Muilou+IXzS+gv/QtuZ/zV9C0UCA7j\n0OP+ipTBAgMBAAECggEADvUBeRo4v5Sbdf6J8WpIDzqfjgcn2kS+6Je3gJ9dY4SF\nSoj22DPYTqBtrtnoG+IPrqUUnVucMNXTi4+m3qt8hs07I5MAs8g+L9w2y3Goyf6D\nLxJ5fxoMcpl146ga2AZhvQgeK5LeySWj/N3/BhZ3hv8I5wziRJkp0ebE/YfdeY3G\nrYsFb1Gsx6I4Yq96K+q8f1Pb6RiKZLGFQrzkJHWTAxVAurKnGolnasRiH1ItYalm\nWJP9tC5JRJXbkGDfqlk/00qrKhs9zPBzrewm7qmVxOvCTdJY8HvmnHHMgWQhmDgH\nxElt/7jC3gLgk0qWkpnWn8TyMdGp4jDBaqLAMiaIGQKBgQDSGpZPYmj47VAGZecM\n+3fQEzgnjO/JtHB8UPPAhWPkjjBXAn0Ys5Hr0dk8MUqdxF1aYx5d1nJeuJwjU3XN\ngNHYI2PLklotJkXbc57OZPVjDAjxFy40dv9pLpEWVbgou9nHXaiQ7mZqsV7611Vp\nrvJUcIJlTpcJhyc3/akvIM07vwKBgQDP6MG1iUfikpRN8eTSt30YmEmLTGqCtyCU\n+o7Ma31alRWBmQOYsHSXRRFYi6+MYvKLOqfe1tVeeO+96mW8XiOv5Zy50USnnBld\notebmUap2VdDSEQg2aMtusQJ7dqITz77YgZzTshY1UB68K9RcT+KrxGuZmxVUaPs\npKttdzZPfwKBgEsmKVcxmtxWfYYcUr0pANzS0wYKegYKXSWKCvV0gJtSZGXqxPXd\n3Ladc3b9JnQxtTZMN6NWvce1fluAUaV0ixok5l/88/YsN1ZcD5RBNif8OQKKyQMJ\nASgM+OYlON6Q+j8997oHG2jUEmXkOW+4nIKpT2qO5qUIy3VSbH4n3GCfAoGBAJk/\ntMEN/rmoV76YZZVYgNIHNnaCDiRpvY9ynJ1bQdvp9h8/3WHH9zilRWLiG7S8HpG3\n25MrAb2QIQ743qKZNW7rLbnd4eA19JCLfqeHtIlv1Z2Xf/hC07/aYbP76c/9sav0\nFlMaKB0qm0vDa0b51d9wqfTGNGYzNkQxINcgPx0bAoGBAI0yT5niHkVu4rf4JxWy\n3HzZOMmx6qLGYXqtud0twRusYCrvjUup/UmbspHVoqAQhuOfopXSFCvs7VmMsw9f\nk4HgMWOVbz441q7K4+1Rd06LCDxiM+3NF761WatLb7fenQUpfFWCHd7TMJAgUs7+\n+jqV+daCmMI/71MRB5D2jSKn\n-----END PRIVATE KEY-----\n',
      },
    }),
  );
};

module.exports = generateClientSecret;
