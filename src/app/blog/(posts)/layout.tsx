import { getPosts } from '@/utils/posts';
import PostNavigation from '../_components/PostNavigation';

export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const posts = await getPosts();

  return (
    <section className="prose prose-lg mx-auto max-w-3xl p-4 dark:prose-invert prose-a:text-White-myVScodeText prose-a:no-underline hover:prose-a:underline prose-img:rounded-lg prose-hr:border-White-line lg:p-8 dark:prose-hr:border-dark-line">
      {children}
      <PostNavigation posts={posts} />
    </section>
  );
}
