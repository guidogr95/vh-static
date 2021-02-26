// Utils
import dynamic from 'next/dynamic'
// Components
const ArticleSlider = dynamic(() => import('components/ArticleSlider'))
const AllBlogPosts = dynamic(() => import('components/Blog/AllBlogPosts'))
const BlogNav = dynamic(() => import('components/Blog/BlogNav'))
const SmallHeader = dynamic(() => import('components/Shared/SmallHeader'))
const ResourcesList = dynamic(() => import('components/Shared/ResourcesList'))
const AllTutorials = dynamic(() => import('components/Tutorials/AllTutorials'))
const TextHeader = dynamic(() => import('components/Shared/TextHeader'))
const VideoGallery = dynamic(() => import('components/Shared/VideoGallery'))
const FaqAccordion = dynamic(() => import('components/Faq/FaqAccordion'))
const CardGridThumbnailIcon = dynamic(() => import('components/Shared/CardGridThumbnailIcon'))

const renderWithProps = ({ componentName, props }) => {
    switch (componentName) {
        case 'blog.blog-nav':
            return <BlogNav key={componentName} {...props} />
        case 'blog.featured-post-slider':
            return <ArticleSlider key={componentName} {...props} />
        case 'blog.all-blog-posts':
            return <AllBlogPosts key={componentName} {...props} />
        case 'universal.small-header':
            return <SmallHeader key={componentName} {...props} />
        case 'whitepapers-ebooks.all-whitepapers-and-ebooks':
            return <ResourcesList key={componentName} {...props} />
        case 'tutorials.all-tutorials':
            return <AllTutorials key={componentName} {...props} />
        case 'universal.text-header':
            return <TextHeader key={componentName} {...props} />
        case 'videos.all-videos':
            return <VideoGallery key={componentName} {...props} />
        case 'faqs.faq-accordion':
            return <FaqAccordion key={componentName} {...props} />
        case 'universal.card-grid-thumbnail-and-icon':
            return <CardGridThumbnailIcon key={componentName} {...props} />
        default:
            return <p>{componentName}</p>
    }
}

export default renderWithProps