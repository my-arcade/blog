import { mount } from '@vue/test-utils';
import BlogPost from './BlogPost.vue';

describe('BlogPost', () => {
  it('renders blog post title and content', () => {
    const post = {
      title: 'Test Post',
      content: 'This is a test post.'
    };

    const wrapper = mount(BlogPost, {
      propsData: { post }
    });

    expect(wrapper.text()).toContain(post.title);
    expect(wrapper.text()).toContain(post.content);
  });
});
