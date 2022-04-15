import { Link as RouterLink } from 'react-router-dom';
// material
import { Grid, Button, Container, Stack, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import Iconify from '../components/Iconify';
import BlogPostCard from '../components/Blog/BlogPostCard';
import BlogPostsSort from '../components/Blog/BlogPostsSort';
import BlogPostsSearch from '../components/Blog/BlogPostsSearch';
// mock
import POSTS from '../_mock/blog';

// ----------------------------------------------------------------------

const SORT_OPTIONS = [
    { value: 'latest', label: 'Latest' },
    { value: 'popular', label: 'Popular' },
    { value: 'oldest', label: 'Oldest' },
];

// ----------------------------------------------------------------------

export default function BlogPage() {
    return (
        <Page title="Dashboard: Blog">
            <Container>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <Typography variant="h4" gutterBottom>
                        Blog
                    </Typography>
                    <Button variant="contained" /*component={RouterLink}*/ to="#" startIcon={<Iconify icon="eva:plus-fill" />}>
                        New Post
                    </Button>
                </Stack>

                <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
                    <BlogPostsSearch posts={POSTS} />
                    <BlogPostsSort options={SORT_OPTIONS} />
                </Stack>

                <Grid container spacing={3}>
                    {POSTS.map((post, index) => (
                        <BlogPostCard key={post.id} post={post} index={index} />
                    ))}
                </Grid>
            </Container>
        </Page>
    );
}