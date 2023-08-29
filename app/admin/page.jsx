'use client';
import '@/Css/Admin.css'
import toast,{Toaster} from 'react-hot-toast'
import { useState } from "react"
import axios from 'axios';
function AdminPage() {
    const [isAdmin,setIsAdmin]=useState(false)
    const [objectUrl,setObjectUrl]=useState(null)
    const [file, setFile] = useState(null)
    const submitPassword=async(e)=>{
        e.preventDefault()
        const loading=toast.loading('Checking Password')
        const data=new FormData(e.currentTarget)
        const password=Object.fromEntries(data)
       const res= await fetch('/api/admin',{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(password)
        })
        toast.dismiss(loading)
        if(res.ok){
            toast.success('Correct Password',{duration:1000})
            setTimeout(() => {
                setIsAdmin(true)
            }, 1000);
        }else{
            const err=await res.json()
            toast.error(err.message,{duration:1500})
        }
    }
    const uploadToClient=(e)=>{
        const i=e.target.files[0]
        setObjectUrl(URL.createObjectURL(i))
        setFile(i)
    }
    const submitData=async(e)=>{
        const loading=toast.loading("Uploading data")
        e.preventDefault()
        const formData=new FormData(e.currentTarget)
        const data=Object.fromEntries(formData)
        const form = new FormData()
        form.append('name', data.name)
        form.append('projectUrl', data.projectUrl)
        form.append('githubUrl', data.githubUrl)
        const datas = Object.keys(file).forEach(key => {
            form.append(file.item(key), file.item(key))
        })
        const res= await axios.post('/api/upload',JSON.stringify(form))
        toast.dismiss(loading)
        if(res.ok){
            toast.success('file upload',{duration:1000})
            setTimeout(() => {
                setIsAdmin(true)
            }, 1000);
        }else{
            toast.error(err.message,{duration:1500})
        }
    }
  return (
    <>
    <head>
        <title>Admin Panel</title>
    </head>
    <section className="adminPage">
        <Toaster
          toastOptions={{
            style:{
                fontSize:"19px",
                fontWeight:"bold"
            }
          }}
        />
        {
            isAdmin?(
                <form method='post' onSubmit={submitData} className='d-form'>
                    <label>Enter Your Project Name</label>
                    <input type="text" name="name" placeholder='Project Name' />
                    <label>Enter Your Project Url</label>
                    <input type="text" name="projectUrl" placeholder='Project Url' />
                    <label>Enter Your GitHub Url</label>
                    <input type="text" name="githubUrl" placeholder='GitHub Url' />
                    <label>Enter Your Project Image</label>
                    <input type="file" name="image" onChange={uploadToClient} accept="image/*"/>
                    {objectUrl&&<img src={objectUrl}/>}
                    <button type='submit'>Submit</button>
                </form>
            ):(
                <form method="post" onSubmit={submitPassword} className="p-form">
                    <input type="text" name="password" placeholder="Enter your password" />
                    <button type="submit">Submit</button>
                </form>
            )
        }
    </section>
    </>
  )
}

export default AdminPage