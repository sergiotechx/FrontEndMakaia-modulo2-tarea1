const compTbodyPocket = document.querySelector('#tbodyPocket');
const compTbodyRender = document.querySelector('#tbodyRender');

const getData =async()=>{
    try{
            const url1 = 'https://makaia.pockethost.io/api/collections/movements/records' ;
            const url2 = 'https://tarea1-json-server.onrender.com/movements';
            const result1 = await axios.get(url1);
            const result2 = await axios.get(url2);
            console.log("cosa", result2.data);
            return({pocket:result1.data.items,render:result2.data})
        } 
    catch(error){
       
    }
 }


getData().then((data)=>{renderHtml(data)});

const renderHtml= (data)=>{
      let htmlTable ='';
    data.pocket.forEach(element => {
        htmlTable += `
        <tr>
            <td>${element.description}</td>
            <td>${element.price}</td>
            <td>${element.type}</td>
        </tr>
        `;
    });
    compTbodyPocket.innerHTML= htmlTable;
     htmlTable ='';
    data.render.forEach(element => {
        htmlTable += `
        <tr>
            <td>${element.description}</td>
            <td>${element.price}</td>
            <td>${element.type}</td>
        </tr>
        `;
    });
    compTbodyRender.innerHTML= htmlTable;
};


document.onload = getData();