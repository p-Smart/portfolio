import connectToDB from "@/api-files/components/dbConnect";
import Portfolios from "@/api-files/models/portfolios";
import error from "@/components/customError"
import formidable from 'formidable'
import fs from 'fs/promises'

const formidablePromise = async (req) => {
    return new Promise((resolve, reject) => {
      const form = new formidable.IncomingForm();
      form.parse(req, async (err, fields, files) => {
        if (err) {
          reject(err);
          return;
        }
        resolve({fields, files});
      });
    });
}


const UploadProject = async (req, res) => {
    try{
        if(req.method !== 'POST'){
            error('Only POST Requests', 404)
        }
        await connectToDB()

        const {fields, files} = await formidablePromise(req)
        const {title, url, descp, github} = fields
        const {image} = files
        const imageBase64 = await fs.readFile(image.filepath, { encoding: 'base64' })

        const result = await Portfolios.create({
            url: url,
            image: `data:image/png;base64, ${imageBase64}`,
            title: title,
            descp: descp,
            github: github,
            portfolio_added: new Date(),
        })
        
        res.json({
            success: true,
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



export default UploadProject


// You have to disable body parsing for formidable to work. And Next.js does automatic body parsing
export const config = {
    api: {
      bodyParser: false,
    },
};