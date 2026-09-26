import { useState, useMemo } from 'react';

interface PostData {
  id: string;
  title: string;
  description: string;
  publishDate: string;
  tags: string[];
  url: string;
  cover?: string;
}

interface Props {
  posts: PostData[];
  allTags: string[];
}

export default function BlogSearch({ posts, allTags }: Props) {
  const [search, setSearch] = useState('');
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return posts.filter((post) => {
      const matchSearch =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.description.toLowerCase().includes(q);
      const matchTag = !activeTag || post.tags.includes(activeTag);
      return matchSearch && matchTag;
    });
  }, [posts, search, activeTag]);

  return (
    <div className="flex flex-col gap-8">
      {/* Search + tag filters */}
      <div className="flex flex-col gap-4">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search posts..."
          className="w-full bg-(--card) border border-(--border) px-4 py-2.5 text-sm text-(--foreground) placeholder:text-(--muted-foreground) focus:outline-none focus:border-(--primary) transition-colors"
        />

        {allTags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTag(null)}
              className={`tag border transition-colors ${
                activeTag === null
                  ? 'border-(--primary) text-(--primary)'
                  : 'border-(--border) text-(--muted-foreground) hover:border-(--foreground) hover:text-(--foreground)'
              }`}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                className={`tag border transition-colors ${
                  activeTag === tag
                    ? 'border-(--primary) text-(--primary)'
                    : 'border-(--border) text-(--muted-foreground) hover:border-(--foreground) hover:text-(--foreground)'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Results grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post) => {
            const date = new Date(post.publishDate).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            });
            return (
              <a
                key={post.id}
                href={post.url}
                className="group plate flex flex-col overflow-hidden hover:border-(--primary) transition-colors"
              >
                {post.cover ? (
                  <img src={post.cover} alt={post.title} className="card-img w-full aspect-video object-cover" />
                ) : (
                  <div className="w-full aspect-video bg-(--muted) flex items-center justify-center">
                    <span className="font-heading text-4xl font-bold text-(--subtle-foreground) select-none">
                      {post.title.charAt(0)}
                    </span>
                  </div>
                )}
                <div className="flex flex-col flex-1 p-5 gap-3">
                  {post.tags.length > 0 && (
                    <ul className="flex flex-wrap gap-1.5">
                      {post.tags.map((tag) => (
                        <li
                          key={tag}
                          className="tag"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="flex flex-col gap-1.5 flex-1">
                    <h3 className="text-xl leading-tight group-hover:text-(--primary) transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-(--foreground) line-clamp-2">{post.description}</p>
                  </div>
                  <time className="text-xs text-(--muted-foreground) mt-auto">{date}</time>
                </div>
              </a>
            );
          })}
        </div>
      ) : (
        <p className="text-(--muted-foreground) text-sm py-8 text-center">
          No posts match your search.
        </p>
      )}
    </div>
  );
}
