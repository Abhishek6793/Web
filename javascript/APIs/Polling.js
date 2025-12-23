setInterval(() => {
  fetch("https://api.cricapi.com/v1/currentMatches?apikey=b3565c07-7489-4adc-a2cc-c3a7baaf4c97&offset=0")
    .then((response) => response.json())
    .then((data) => {
      console.log("Latest Score:", data);
    })
    .catch((error) => {
      console.error("Error fetching match data:", error);
    });
}, 5000);

//this api link came from cricdata.org. You can use your own API key by signing up on their website.
//Make sure to handle API rate limits and errors in a real-world application.
//
