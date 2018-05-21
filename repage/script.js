setTimeout(function() {
    let timeNow = new Date().toLocaleString();
    console.log('reload at '+timeNow);
    location.reload();
}, 300000); // 300000 = 5 min || 600000 = 10 min 