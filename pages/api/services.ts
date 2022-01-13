// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import {services} from '../../data'

import { IService } from "../../types/Services";


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IService[]>
) {
  
  // Backend data fetching logic goes here
  res.status(200).json(services)
}
