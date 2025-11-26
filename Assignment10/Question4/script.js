let U = fetch("http://localhost:3004/users").then(r => r.json());
let O = fetch("http://localhost:3005/orders").then(r => r.json());
let P = fetch("http://localhost:3006/products").then(r => r.json());

Promise.all([U, O, P])
    .then(data => {
        document.getElementById("loading").style.display = "none";

        let [u, o, p] = data;

        document.getElementById("dash").innerHTML = `
            <h3>Total Users: ${u.users.length}</h3>
            <h3>Total Orders: ${o.orders.length}</h3>
            <h3>Total Products: ${p.products.length}</h3>
        `;
    })
    .catch(() => {
        document.getElementById("dash").innerHTML =
            `<p>Some data could not be loaded.</p>`;
    });