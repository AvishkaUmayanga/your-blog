import { useGetAllPostsQuery } from '../../redux/api/postApi';
import { useMemo } from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow'; 

const PostCard = () => {
  const { data: postData } = useGetAllPostsQuery({});
  
  const mappedPosts = useMemo(() => postData?.posts.map((data: {postImg: string, title: string, userName: string, updatedAt: string}, index: number) => (
    <div key={index} className="duration-300 bg-white border border-teal-500 rounded hover:scale-105 dark:bg-slate-950">
      <img src={data.postImg} alt="post" className='flex object-cover w-full rounded-t max-sm:h-44 sm:h-52' />
      <div className='flex flex-col gap-5 p-2'>
        <h4 className='text-xl font-medium'>{data.title}</h4>
        <div className='flex items-center justify-between'>
          <p>@{data.userName}</p>
          <p className='text-sm'>{formatDistanceToNow(new Date(data.updatedAt), {addSuffix: true})}</p>
        </div>
        <button className='py-1 font-medium duration-300 border border-teal-500 rounded hover:scale-95'>
          View Post
        </button>
      </div>
    </div>
  )),[postData?.posts])
  
  return (
    <>
      {mappedPosts}
    </>
  );
};

export default PostCard;


