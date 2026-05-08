import { Link } from 'react-router-dom'
import './blog.css'

// Blog post data
const posts = [
  {
    id: 1,
    title: "Users' Perceptions of Sustainable Self-Care Products",
    subtitle: 'A journey of learning UX Design in fieldwork research at Hyper Island',
    excerpt:
      'This article covers an activity made in UX Design research, the second module of the Hyper Island UX Upskill program. We did fieldwork in which we tried to understand the users\' perceptions of sustainable self-care products.',
    date: 'Nov 20, 2023',
    readTime: '5 min read',
    tags: ['UX Research', 'UX Design', 'UX Beginner'],
    href: 'https://medium.com/@galsilv/users-perceptions-of-sustainable-self-care-products-fa7b8b7b5069',
    img: `${import.meta.env.BASE_URL}images/projects/blog.png`,
  },
]

export default function Blog() {
  return (
    <div className="blog-page">

      {/* ── Back link ── */}
      <Link to="/" className="org-back">
        &#8592; Back to the Main page Portfolio
      </Link>

      {/* ── Page title ── */}
      <h1 className="blog-page__title">All Posts</h1>

      {/* ── Divider ── */}
      <div className="blog-divider" />

      {/* ── Posts list ── */}
      <ul className="blog-list">
        {posts.map(post => (
          <li key={post.id} className="blog-card">
            <a
              className="blog-card__img-wrap"
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={post.title}
            >
              <img src={post.img} alt={post.title} className="blog-card__img" />
            </a>

            <div className="blog-card__body">
              <div className="blog-card__meta">
                <div className="blog-card__author">
                  <div className="blog-card__avatar">
                    G
                  </div>
                  <span className="blog-card__author-name">Gláucia Silva Bierwagen</span>
                </div>
                <span className="blog-card__date">{post.date} &nbsp;·&nbsp; {post.readTime}</span>
              </div>

              <a
                className="blog-card__title-link"
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className="blog-card__title">{post.title}</h2>
              </a>

              <p className="blog-card__subtitle">{post.subtitle}</p>
              <p className="blog-card__excerpt">{post.excerpt}</p>

              <div className="blog-card__footer">
                <div className="blog-card__tags">
                  {post.tags.map(tag => (
                    <span key={tag} className="blog-card__tag">{tag}</span>
                  ))}
                </div>
                <a
                  className="blog-card__read-btn"
                  href={post.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read on Medium &#8599;
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>


    </div>
  )
}
