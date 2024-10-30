import toast from 'react-hot-toast';

export const getBlogs = () => {
    let blogs = [];
    
    const storedBlogs = localStorage.getItem("blogs");
    if(storedBlogs){
        blogs = JSON.parse(storedBlogs);
    }
    return localStorage.setItem("blogs", JSON.stringify(blogs));
}

export const saveBlogs = (blogDetails) => {
    let blogs = getBlogs();
    const isExist = blogs.find(b=> b.id === blogDetails.id);
    if(isExist){
        toast.error("joma ache");
    }
    else{
        blogs.push(blogDetails);
        localStorage.setItem("blogs", JSON.stringify(blogDetails));
        toast.success("bookmark added");
    }

}