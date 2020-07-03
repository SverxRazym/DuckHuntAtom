export function dataSend(name,parameter) {
    let promise = fetch("http://duckhuntatom/api.php",
        {
            method: "POST",
            body: `par=${parameter}&`,
            headers: {
                "Content-type": "application/x-www-form-urlencoded;" +
                    " charset=UTF-8"
            }
        }).then(resp=>{
        if (resp.ok){
            resp.json().then(data=>{
                console.log(data)
                if(parameter==1){
                    $("#Modal2 th:nth-child(2)").text("Очки");
                    data.forEach(item=>{
                        createStr(item["name"],item["score"]);
                    })
                }
                if(parameter==2){
                    $("#Modal2 th:nth-child(2)").text("Время");
                    data.forEach(item=>{
                        createStr(item["name"],item["speed"]);
                    })
                }
                $("#Modal1").modal("hide");
                $("#Modal2").modal("show");

            })
        }
    })
}

function createStr(name,val) {
   let str =  "<tr><td>"+ name +"</td>" + "<td>"+ val + "</td></tr>";
    $("#table1").append(str);
}