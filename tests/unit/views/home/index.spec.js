import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import Home from "@/views/home/index";
import { getGoodsList } from "@/api/home";
jest.mock("@/api/home", () => {
  return {
    __esModule: true,
    getGoodsList: jest.fn()
  }
});

describe('home page tests', () => {
  it('1. 测试未登录状态下, HelloWorld组件要展示，获取列表不被触发', async () => {
    const wrapper = shallowMount(Home, {
      mocks: {
        $store: {
          getters: {
            getUserInfo: false
          }
        },
        getList: jest.fn()
      }
    });
    expect(wrapper.vm.isLogin).toBe(false);
    expect(wrapper.findComponent({name: 'HelloWorld'}).exists()).toBe(true);
    expect(getGoodsList).toHaveBeenCalledTimes(0);
  })
  it('2. 测试登录状态下，HelloWorld组件不展示, 获取列表接口触发', async () => {
    const wrapper = shallowMount(Home, {
      mocks: {
        $store: {
          getters: {
            getUserInfo: true
          }
        }
      }
    });
    expect(wrapper.vm.isLogin).toBe(true);
    expect(wrapper.findComponent({name: 'HelloWorld'}).exists()).toBe(false);
    expect(getGoodsList).toHaveBeenCalledTimes(1);
  });
  it('3. 测试登录状态下，获取列表接口触发后，页面上.list下的li渲染数量要与接口返回数组长度一致', async () => {
    const mockGoodsList = [
      {
        id: 1,
        name: "苹果"
      },
      {
        id: 2,
        name: "栗子"
      },
      {
        id: 3,
        name: "香蕉"
      },
    ];
    getGoodsList.mockResolvedValue(mockGoodsList);
    const wrapper = shallowMount(Home, {
      mocks: {
        $store: {
          getters: {
            getUserInfo: true
          }
        }
      }
    });
    await wrapper.vm.getList();
    expect(wrapper.vm.goodsList).toEqual(mockGoodsList);
    expect(wrapper.findAll('[data-test="goodsItem"]').length).toBe(mockGoodsList.length);
  });
  it('4. 测试登录状态下，点击退出登录，要分发userLogout事件，并且store中的userInfo为null', async () => {
    const localVue = createLocalVue();
    localVue.use(Vuex);
    const store = new Vuex.Store({
      state: () => ({
        userInfo: {
          username: 'test'
        }
      }),
      mutations: {
        setUserInfo (state, payload) {
          state.userInfo = payload;
        }
      },
      getters: {
        getUserInfo (state) {
          return state.userInfo
        }
      },
      actions: {
        userLogout (context) {
          context.commit("setUserInfo", null)
        }
      }
    })
    const wrapper = shallowMount(Home, {
      localVue,
      store
    });
    await wrapper.find('[data-test="logoutBtn"]').trigger('click');
    expect(wrapper.vm.userInfo).toBe(null);
  });
});