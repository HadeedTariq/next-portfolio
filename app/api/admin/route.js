import {NextResponse} from 'next/server'

export async function POST(req,res){
    const pass=process.env.NEXT_PUBLIC_PASSWORD
    console.log(req.files);
    const data=await req.json()
    const {password}=data;
    if(!password) return NextResponse.json({message:"Please fill the password field"},{status:404})
    else if(password!==pass) return NextResponse.json({message:"Invalid password"},{status:404})
    return NextResponse.json({message:"Correct Password"},{status:200})
}