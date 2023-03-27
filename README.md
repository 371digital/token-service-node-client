## Token Service Node Client

### validateToken

Bir tokenı validate etmek için kullanılır.

```
import tokenService from "token-service-node-client";

const validateResponse = await tokenService.validateToken("token", "xxx-service-slug") 

/*
validateResponse
{
  status: true,
  error: ''
} 
*/
```