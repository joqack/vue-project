
export default {
    install(Vue){
        Vue.filter('formatTime',
        time => {
        var date =new Date(time);
        return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
        });
    }
}


