## Promise 

Promises is a completion of represention or failure of  asynchronous  operation. 
Multiple asynchronous operation is allows. there are basically 3 states in promise 
    1. resovle 
    2. pending
    3. reject 

```tsc
      function fetchMyData() : Promise<string> {
        
        return new Promise((resolve, reject) => {
                // Asynchronous operation or task

                // If Successfull call resolve wht the result 
            setTimeout(() => {
                resolve('Data fetched form server test');
            }, 1000);

            // if there is an error call reject wth reason 
        });
    }
```

A promise is normally created using Promise Constructor, which is called callback function with resolve and reject parameters.  Async operation is perform inside this call back


## Use async / await    with Promise 

async/ awit syntax in  provide a mor concise and readable way to work with promise. it looks asynchornous code and makeing it easise to understand.

```tsc 
    async function fetchMyDataAsync() {
        try {
                  // Asynchronous code with await keyword
            const result = await fetchMyData();
            console.log(result);
        } catch (error) {
                // errors Handle
            console.error("Error fetching data:", error);
        }
    }
     
    // Call the asynchronous function
    fetchMyDataAsync();
```

