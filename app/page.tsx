import React from "react";
import CarouselComponent from "@/components/Carousel";
import BlogGrid from "@/components/BlogGrid";

async function getBlogs() {
  const res = await fetch(`http://localhost:3080/api/v1/posts`, {
    method: 'GET',
    headers: {
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiZmlyc3ROYW1lIjoiQmEiLCJsYXN0TmFtZSI6IkxhcCIsImlzQWN0aXZlIjpmYWxzZSwiZW1haWwiOiJsYXBuYkBhaW1lc29mdC5jb20iLCJhdmF0YXIiOiJudWxsIiwicm9sZSI6MSwidXNlcm5hbWUiOm51bGwsImNyZWF0ZWRfYXQiOiIyMDIzLTA2LTIzVDA0OjUxOjAyLjA2NVoiLCJ1cGRhdGVkX2F0IjoiMjAyMy0wNi0yM1QwNDo1MTowMi4xMTJaIiwiaWF0IjoxNjg5MzA3ODI3LCJleHAiOjE2ODkzOTQyMjd9.mOZfVfvMCGA3NupLQCYfDqZ-VNlGQ79XSqZk-WirGSM"
    }
  })
  return res.json()
}

export default async function Page() {
  const blogData = getBlogs()
  const [blogs] = await Promise.all([blogData])
  // console.log(blogs)

  return (
    <div>
      <CarouselComponent />
      <div className="mt-4 font-semibold text-gray-900 dark:text-white">
        Blogs
      </div>
      <BlogGrid blogs={blogs}/>
    </div>
  );
}
