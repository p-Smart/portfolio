import connectToDB from "@/api-files/components/dbConnect";
import Portfolios from "@/api-files/models/portfolios";
import error from "@/components/customError"


const FetchProjects = async (req, res) => {
    try{
        if(req.method !== 'GET'){
            error('Only GET Requests', 404)
        }
        await connectToDB()

        const portfolios = await Portfolios.find({})
        
        res.json({
            success: true,
            data: portfolios
        })
    }   
    catch(err){
        res.status(err.status || 200).json({
            error: {
              message: err.message
            }
        })
    }
}



export default FetchProjects