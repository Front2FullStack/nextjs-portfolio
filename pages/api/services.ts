// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import {services} from '../../data'

import IService from "../../types/Services";


export default (
  req: NextApiRequest,
  res: NextApiResponse
) => {

  // Backend data fetching logic goes here
  res.status(200).json({services})
}
