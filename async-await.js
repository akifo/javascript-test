import { tes } from 'aie'

const aaa = {}

export default aaa

(async ()=>{
    const dataList = [];
    const url = "getData.php";

    for(let i=0;;i++){
        // 通信してresolveされるまで待機する
        const text = await ajaxPost({
            url,
            dataType: "text",
            param: { count: i },
        });

        // 得られたメッセージが空であれば終了する
        if(text === "") break;

        dataList.push(text);
    }

    // for文を無事抜けたら成功したことを意味する
    return dataList; // 硬派な書き方が好きな人は「return Promise.resolve(dataList);」
})().then(dataList=>{
    // ここでdataListを処理する
    console.log(dataList)
}).catch(err=>{
    // 何らかの原因で通信に失敗したらここで処理する
    console.error("通信に失敗しました…");
    console.error(err);
});

function ajaxPost(prop){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve();
        }, 1000);
    });
}