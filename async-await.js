// async/await の素振り

const axios = require('axios')

const request = (int) => {
    // int で指定した秒数だけ待ってからレスポンスを返してくるAPI
    return axios.get(`http://localhost:3000/wait/${int}`).then(res => {
        console.log(res.data)
        return res.data.wait;
    }).catch(err => {
        console.log(err)
    })
}

const main = async () => {
    let count = 0;
    count = await request(1);
    console.log(count)
    count = count + await request(12);
    console.log(count)
    count = 0;
    for(let i = 0; i < 10;i ++) {
        count += await request(i)
        console.log(i)
        console.log(count)
    }
}

main()