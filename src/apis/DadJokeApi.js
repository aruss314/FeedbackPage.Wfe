export const DadJokeApi = {
    getDadJoke,
}

async function getDadJoke(){
    try{
        var url = "https://icanhazdadjoke.com/";

        const response = await fetch(url, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
        }
        });
        if(response.ok === false){
          throw(new Error(`ERROR MESSAGE HERE: response.ok was ${response.ok}`));
        }
        const {id, joke, status} = await response.json();
        return {
            success: true,
            data: joke,
            errors: null
        };
    }
    catch(e){
        console.log(e.message);
        return {
            success: false,
            data: null,
            errors: e.message
        };
    }
}