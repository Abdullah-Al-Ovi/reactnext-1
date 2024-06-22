async function delay(millisecond) {
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve()
        }, millisecond);
    });
}

export default delay;