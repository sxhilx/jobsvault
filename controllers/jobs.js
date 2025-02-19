const Job = require('../modles/Job')
const {StatusCodes} = require('http-status-codes')
const {BadRequest, NotFoundError} = require('../errors/index')

const getAllJobs = async (req, res) => {
    const jobs = await Job.find({createdBy:req.user.userId}).sort('createdAt')
    res.status(StatusCodes.OK).json({jobs, count: jobs.length})
}

const getJob = async (req, res) => {
    const {
        user:{userId}, 
        params:{id:jobId}
    } = req
    
    const job = await Job.findOne({
        _id:jobId, 
        createdBy:userId
    })

    if(!job){
        throw new NotFoundError(`No job with the id: ${jobId}`)
    }

    res.status(StatusCodes.OK).json({job})
}

const createJob = async (req, res) => {
    req.body.createdBy = req.user.userId
    const job = await Job.create(req.body)
    res.status(StatusCodes.CREATED).json({job})
}

const updateJob = async (req, res) => {
    const {
        body:{company, position},
        user:{userId}, 
        params:{id:jobId}
    } = req

    if(company ==='' || position===''){
        throw new BadRequest(`Company or Position cannot be empty`)
    }

    const job = await Job.findByIdAndUpdate(       
        {_id:jobId, createdBy:userId}, 
        req.body, 
        {new:true, runValidators:true}
    )

    if(!job){
        throw new NotFoundError(`No job with the id: ${jobId}`)
    }

    res.status(StatusCodes.OK).json({job})

   
}

const deleteJob = async (req, res) => {
    const {
        user:{userId}, 
        params:{id:jobId}
    } = req

    const job = await Job.findByIdAndDelete({
        _id:jobId, createdBy:userId
    })

    if(!job){
        throw new NotFoundError(`No job with the id: ${jobId}`)
    }

    res.status(StatusCodes.OK).send()
}

module.exports = {
    getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob
}