function Service(){
    this.getListTeachers = function(){
        return axios({
            url: "https://6320b81c82f8687273a64f87.mockapi.io/api/teachers",
            method: "GET",
        })
    }
}