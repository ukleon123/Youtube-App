import request from "request";
import iconv from "iconv-lite";

export default function getSuggestion(query){
    const options = {
        uri : "https://suggestqueries-clients6.youtube.com/complete/search",
        qs : {
            client : "youtube",
            hl : "ko",
            ds : "yt",
            q : query
        },
        encoding : null
    }
    request.get(options, (error, response, body) =>{
        let data = iconv.decode(body, "euc-kr").toString();
        data = JSON.parse(data.slice(29, -44));
        data.forEach((item) => {
            console.log(item[0]);
        })
    });
}

//for in ==> access to key
//for of ==> access to value (must need Symbol.iterator ex)array)


getSuggestion("eraser");