
var params = new URLSearchParams(location.search)


        document.querySelector('h2').textContent = `Welcome ${params.get("name")}`;
        document.getElementById('name').textContent = params.get("name");
        document.getElementById('email').textContent = params.get("email");
        document.getElementById('mobile').textContent = params.get("mobile");
        document.getElementById('gender').textContent = params.get("gender");
        document.getElementById('address').textContent = params.get("address");