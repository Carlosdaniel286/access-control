//export const dynamic = 'force-static'

import { NextResponse } from "next/server"

 
export async function GET() {
  
  const data = [{id:'oii'}]
 
   return NextResponse.json(data)
}