import HelloWorld from "@/components/HelloWorld";

import { shallowMount, createLocalVue, mount } from "@vue/test-utils";

import VueRouter from "vue-router";
const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter();
describe('HelloWorld component unit test', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(HelloWorld, {
      propsData: {
        title: "测试"
      }
    })
  })
  it('props title test', async () => {
    await wrapper.vm.$nextTick();
    const title = wrapper.find('[data-test="title"]');
    expect(wrapper.vm.title).toBe("测试");
    expect(title.text()).toBe("测试");
  });
  it('method changeTitle test', async () => {
    await wrapper.vm.$nextTick();
    const title = wrapper.find('[data-test="title"]');

    await title.trigger("click")
    expect(wrapper.emitted('update:title')).toBeTruthy();
    // emitted(eventName)[第几次的触发].toEqual(arguments)
    expect(wrapper.emitted('update:title')[0]).toEqual(['改变标题']);
  });
  it('method toLogin test', async () => {
    const wrapper = shallowMount(HelloWorld, {
      localVue,
      router
    });
    const loginBtn = wrapper.find('[data-test="loginBtn"]');
    await loginBtn.trigger("click");
    expect(wrapper.vm.$route.path).toBe("/login");
  });
  it("快照123", async () => {
    const wrapper = mount(HelloWorld);
    await wrapper.setProps({ title: "test" })
    expect(wrapper.html()).toMatchSnapshot();
  })
});