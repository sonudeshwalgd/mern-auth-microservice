class curdRepositor{
    constructor(model){
        this.model=model
    }

    async create(data){
        console.log(data)
        try {
            const response= await this.model.create(data)
            return response
            
        } catch (error) {
            return {error}
        }
    }
    async get(data){
        try {
            const response= await this.model.findOne(data)
            return response
            
        } catch (error) {
            return {error}
        }
    }

}

module.exports =curdRepositor