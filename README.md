# Scarlex API Wrapper

- [Discord] : https://discord.gg/ZKzmmt4gvq
- [Site] : https://scarlex.org/api

# How To Use

- join our Discord for any support (link above).
- register your own profile on our website (link above).
- then login and you're ready to fetch endpoints and check your stats.

# Examples

**- Async Will Be Needed**

```javascript
// import the apiCLient
const { ApiClient } = require('scarlex');
// create a new instance of the apiClient & pass your name and password which you used to register on our website.
const api = new ApiClient({
    name: 'A V I X I T Y',
    password: 'uwudaddy',
});

// example of making a request to the api with endpoint and query you've provided.
(async () => {
    // to get full list of current added endpoints you can use the `json` endpoint.
    const data = await api.makeRequest('progressbar?max=100&value=69&size=100&style=3').then(async (e) => {
        return e
    });
    console.log(await data)
})()

```

```json
// will return json response
{
  "code": 200,
  "message": "•••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••───────────────────────────────",
  "percentage": "69/100"
}
```
## Developers / Contributors
- **[A V I X I T Y#0001]( https://github.com/avixityyt )**
