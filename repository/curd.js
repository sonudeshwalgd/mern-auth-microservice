class curdRepositor{
    constructor(model){
        this.model=model
    }

    async create(data){
        try {
            const userCreated= await this.model.create(data)
            return userCreated
        } catch (error) {
            return {error}
        }
    }
    async get(data){
        try {
            const response= await this.model.findOne(data).select("+password")
            return response
        } catch (error) {
            return {error}
        }
    }

}

module.exports =curdRepositor